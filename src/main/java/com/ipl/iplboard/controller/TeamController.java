package com.ipl.iplboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ipl.iplboard.model.Team;
import com.ipl.iplboard.repository.MatchRepository;
import com.ipl.iplboard.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        super();
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team/{name}")
    public Team getTeam(@PathVariable String name) {
        Team team = this.teamRepository.findByTeamName(name);
        team.setMatches(this.matchRepository.findLatestMatchesbyTeam(name, 4));
        return team;
    }

}
