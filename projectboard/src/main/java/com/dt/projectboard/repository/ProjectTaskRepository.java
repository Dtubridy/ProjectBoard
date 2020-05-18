package com.dt.projectboard.repository;

import com.dt.projectboard.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectTaskRepository extends CrudRepository <ProjectTask, Long> {


}
