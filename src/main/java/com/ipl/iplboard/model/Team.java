package com.ipl.iplboard.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Team {

	@Id
	private long id;
	private String teamName;
	private long totalMatches;
	private long totalWins;
	
}
