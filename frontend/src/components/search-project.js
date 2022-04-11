import { useState, useEffect, useContext } from "react";
import { Button, Input } from "antd";
import { ethers } from "ethers";
import _ from "lodash";

import { ProjectList } from "./projects/project-list";
import { ProjectContext } from "./utils/project_context";

const { Search } = Input;


export const SearchProject = ({ }) => {
  const { projects, setProjects } = useContext(ProjectContext);

  const [options, setOptions] = useState([]);


  const projectContracts = projects.map((p) => {
    return p.contract;
  });

  const projectsAddress = projects.map((p) => {
    return p.contractAddr;
  });


  const searchResult = async (query) => {
    const asyncFilter = async (projectContracts, predicate) => {
      const results = await Promise.all(projectContracts.map(predicate));

      return projectsAddress.filter((_v, index) => {
        return results[index];
      });
    };

    const filtered = await asyncFilter(projectContracts, async (contract) => {
      const title = await contract.title();
      return title.includes(query);
    });

    return filtered;
  };

  const onSearch = (value) => {
    searchResult(value).then((filtered) => {
      setOptions(value ? filtered : []);
    });
  };

  const handleClickCreateProject = () => {
    window.location.href = "/create-project";
  };

  return (
    <div>
      <Search
        placeholder="Search projects"
        onSearch={onSearch}
        enterButton
        style={{ width: "50%", marginTop: "30vh" }}
      />
      <div style={{ marginTop: "10vh" }}>
        <Button
          type="primary"
          size="large"
          shape="round"
          onClick={handleClickCreateProject}
        >
          Create New Project
        </Button>
      </div>
      {options.length > 0 ? <ProjectList projects={options} /> : ""}
    </div>
  );
};
