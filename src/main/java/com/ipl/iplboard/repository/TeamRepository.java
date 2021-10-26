package com.ipl.iplboard.repository;

import org.springframework.data.repository.CrudRepository;

import com.ipl.iplboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>{
	
	Team findByTeamName(String teamName);

}
