package com.ipl.iplboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ipl.iplboard.model.Team;
import com.ipl.iplboard.repository.MatchRepository;
import com.ipl.iplboard.repository.TeamRepository;

import java.time.LocalDate;
import java.util.List;

import com.ipl.iplboard.model.Match;

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

    @GetMapping("/team/{name}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String name, @RequestParam int year) {

        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);
        // return
        // this.matchRepository.getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(name,
        // startDate,
        // endDate, name, startDate, endDate);
        return this.matchRepository.getMatchesByTeamBetweenDates(name, startDate, endDate);

    }

}
