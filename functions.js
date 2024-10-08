var colorGreen = "#1AFF1A";
var colorYellow = "#FFD100";
var colorWhite = "#FFFFFF";

function resetTree(theTree) {
	if (pointsTree[theTree] == 0)
		return;
	
	maxTierArray[theTree] = 1;		
	rankPoints += pointsTree[theTree];
	pointsTree[theTree] = 0;
	
	for (var y = 0; y < tierNum; y++)
		pointsTier[theTree][y] = 0;
	
	var i;
	var iStop;
	if (theTree == 0)
		i = 0;
	else
		i = treeStartStop[theTree - 1] + 1;
	
	iStop = treeStartStop[theTree];			
	
	while (i <= iStop) {	
		rankTop[i][0] = 0;
		rankTop[i][1] = rank[i][0];
		rankTop[i][2] = rank[i][1];

		document.getElementById("modifyRankTopColor"+ i).style.color = colorWhite;
		document.getElementById("modifyRankTop"+ i).style.color = colorWhite;

   		document.getElementById('modifyDescriptionTop'+i).innerHTML = rankTop[i][1];
		if (talent[i][6]) {
			document.getElementById("arrowYellow"+ i).style.visibility = "hidden";
			document.getElementById("arrowGreen"+ i).style.visibility = "hidden";
		}

		document.getElementById('modifyRankTopDescription'+i).innerHTML = 0;
		document.getElementById('modifyRankTop'+i).innerHTML = 0;
		document.getElementById('talentThumb'+ i).style.visibility = "hidden";

		document.getElementById('iconOverGreen'+ i).style.visibility = "hidden";
		document.getElementById('iconOverYellow'+ i).style.visibility = "hidden";
		
		if (talent[i][5] == 1 && (!talent[i][6])) {
			document.getElementById("modifyRankTopColor"+ i).style.color = colorGreen;
			document.getElementById("modifyRankTop"+ i).style.color = colorGreen;
		}
		i++;
	}
	
    document.getElementById('levelRequired').innerHTML = rankPointsMax - rankPoints + levelMin - 1;	
	document.getElementById('tabPointsAvailable').innerHTML = rankPoints;
	//each tree's points
	document.getElementById(tree[theTree]+'tabPoints').innerHTML = 0;
	document.getElementById('spec' + theTree).innerHTML = 0;
	
	changeCopyURL();
}

function resetTreeAll() {
	for (var i = 0; i < tree.length; i++) {
		resetTree(i);
	}
}

function getMaxTier(theTree) {
	var maxTier = 0;
	for (var loopMaxTier = 0; loopMaxTier < tierNum; loopMaxTier++) {
		if (pointsTier[theTree][loopMaxTier] != 0)
			maxTier = loopMaxTier;
	}
	maxTier++;
	return maxTier;
}

function getPointsAboveAndCurrent(theTree, maxTier) {
	var pointsTierTotalAboveAndCurrent = 0;
	var loopPointsTierAbove = 0;
	for (loopPointsTierAbove; loopPointsTierAbove < maxTier; loopPointsTierAbove++) {
		pointsTierTotalAboveAndCurrent += pointsTier[theTree][loopPointsTierAbove];
	}
	return pointsTierTotalAboveAndCurrent;
}

function canUnlearn(talentID, clickLeftRight, maxTier) {
	var treeID = talent[talentID][0];
	var maxRank = talent[talentID][3];
	var treePoints = pointsTree[treeID];	
	var necessaryPoints;
	var projectedPoints;
	var pointsAboveAndCurrent;
	
	if (hasDependentTalentWithPoints(talentID))
		return false;
	
	if (clickLeftRight == 0) { //left click
		var theCurrentRank = rankTop[talentID][0];
		if (theCurrentRank < maxRank) {
			necessaryPoints = (talent[talentID][5] - 1) * 5;
			if (treePoints < necessaryPoints)
				return false;
			
			if (rankPoints == 0)
				return false;		
			
			if (!checkRequiredTalent(talentID) && theCurrentRank == 0)
				return false;
			
			projectedPoints = pointsAboveAndCurrent++;

		} else {
			return false; 
		}
	} else {	//right click
		if (rankTop[talentID][0] != 0){
			pointsAboveAndCurrent = getPointsAboveAndCurrent(treeID, maxTier - 1);	
			projectedPoints = pointsAboveAndCurrent - 1 + pointsTier[treeID][maxTier - 1];

			for (var thisTier = talent[talentID][5]; thisTier < maxTier; maxTier--) {
				necessaryPoints = (maxTier - 1) * 5;
				projectedPoints -= pointsTier[treeID][maxTier - 1];
				if (projectedPoints < necessaryPoints)
					return false;
			}
		} else {  //if the rank is 0
			return false;
		}
	}	
	return true;
}

function getTalentID(talentName) {
	var theTalentID;
	for (theTalentID = 0; talent[theTalentID]; theTalentID++) {
		if (talent[theTalentID][1] == talentName)
			return theTalentID;
	}
}

function getMinLevel(talentID) {
	return ((talent[talentID][5] - 1) * 5 + 10);
}

function hasDependentTalentWithPoints(talentID) {
	var loopStart;
	var loopStop;
	var theTree = talent[talentID][0];
	
	if (talentID != 0)
		loopStart = talentID - 1;
	else
		loopStart = talentID;
	loopStop = treeStartStop[theTree];	
	
	while (loopStart <= loopStop){	
		if (talent[loopStart][6] && talent[loopStart][6][0] == talentID && rankTop[loopStart][0] != 0)
			return true;
		loopStart++;
	}
	return false;	
}

function canTurnGreen(totalPoints, tree, oldMaxTier) {
	var i;
	var necessaryPoints;
	var iStop;
	var thisTier;
	
	if (tree == 0)
		i = 0;
	else
		i = treeStartStop[tree - 1] + 1;
	
	iStop = treeStartStop[tree];
	
	while (i <= iStop) {
		thisTier = talent[i][5];
		
		necessaryPoints = (thisTier - 1) * 5;
		
		if (thisTier <= oldMaxTier + 3 || necessaryPoints <= totalPoints){
			var noRequirement = checkRequiredTalent(i);
			
			var theCurrentRank = rankTop[i][0];
			var theMaxRank = talent[i][3];
			
			if ((talent[i][5] * 5) <= totalPoints && theCurrentRank != theMaxRank && noRequirement
				||
				(theCurrentRank < theMaxRank && necessaryPoints <= totalPoints && noRequirement)
				) {
				document.getElementById("modifyRankTopColor"+ i).style.color = colorGreen;
				document.getElementById("modifyRankTop"+ i).style.color = colorGreen;
				
				if (canUnlearn(i, 0, oldMaxTier)) {
					if (talent[i][6]) document.getElementById("arrowGreen"+ i).style.visibility = "visible";
				}
			} else if (theCurrentRank == theMaxRank) {
				document.getElementById("modifyRankTopColor"+ i).style.color = colorYellow;
				document.getElementById("modifyRankTop"+ i).style.color = colorYellow;
			} else if (theCurrentRank > 0 ) {
				document.getElementById("modifyRankTopColor"+ i).style.color = colorGreen;
				document.getElementById("modifyRankTop"+ i).style.color = colorGreen;
				document.getElementById("iconOverGreen"+ i).style.visibility = "visible";				
			} else {
				document.getElementById("modifyRankTopColor"+ i).style.color = colorWhite;
				document.getElementById("modifyRankTop"+ i).style.color = colorWhite;
				document.getElementById("iconOverGreen"+ i).style.visibility = "hidden";
				if (talent[i][6]) document.getElementById("arrowGreen"+ i).style.visibility = "hidden";
			}
		}
		i++;
	}
	
	i=0;
	if (rankPoints == 0) {
		while (talent[i]){
			if (rankTop[i][0] == 0) {
				document.getElementById("modifyRankTopColor"+ i).style.color = colorWhite;
				document.getElementById("modifyRankTop"+ i).style.color = colorWhite;
				document.getElementById("iconOverGreen"+ i).style.visibility = "hidden";
			}
			i++;
		}
	}
}

function checkRequiredTalent(talentID) {
	var reqTalent;
	if (reqTalent = talent[talentID][6]) {
		reqTalentID = reqTalent[0];
		reqTalentPoints = reqTalent[1];
		if (rankTop[reqTalentID][0] != reqTalentPoints)
			return false;
	}
	return true;
}

function rankTopOnClick(talentID) {
	var theTree = talent[talentID][0];
	var oldMaxTier = maxTierArray[theTree];
	
	if (!canUnlearn(talentID, 0, oldMaxTier))
		return;
	
	maxRank = talent[talentID][3];					//maximum rank possible	
	var theTier = talent[talentID][5];		
	var theTierIndex = theTier - 1;
	var rankString = rankTop[talentID][1];
	
	var theCurrentRank = rankTop[talentID][0];
	
	if (theCurrentRank < maxRank) {					//see if you hit max rank
		rankTop[talentID][1] = rank[talentID][theCurrentRank];
		rankTop[talentID][0]++;						//if you haven't hit max rank, increment
		theUpdatedRank = rankTop[talentID][0];
		rankTop[talentID][2] = rank[talentID][theUpdatedRank];
		rankPoints--;
		
		if (theUpdatedRank != maxRank) {
			rankString = rankTop[talentID][1] +'<br><br><font color = "ffffff">'+ textNextRank +'</font><br>'+ rankTop[talentID][2];
			document.getElementById('iconOverGreen'+ talentID).style.visibility = "visible";
		} else {
			rankString = rankTop[talentID][1];			
			document.getElementById('iconOverYellow'+ talentID).style.visibility = "visible";
		}
		
		if(theUpdatedRank == maxRank) {
			document.getElementById('textLeftClick'+ talentID).style.color = "#fb1410";
			document.getElementById('textLeftClick'+ talentID).innerHTML = textRightClick;			
		}
		//green
		else {
			document.getElementById('textLeftClick'+ talentID).innerHTML = "";		
		}
		
		if (talent[talentID][6])
			document.getElementById("arrowYellow"+ talentID).style.visibility = "visible";		
		//keep track of points in the tier		
		pointsTree[theTree]++;
		pointsTier[theTree][theTierIndex] = pointsTier[theTree][theTierIndex] + 1;
	}
	
	if (theUpdatedRank == 1 && theTier > oldMaxTier)
		maxTierArray[theTree] = theTier;
	
	document.getElementById("talentThumb"+ talentID).style.visibility = "visible";	
	
	if (pointsTree[theTree] == 1)
		document.getElementById(tree[theTree]+'tabPointsText').innerHTML = textPoint;			
	else	
		document.getElementById(tree[theTree]+'tabPointsText').innerHTML = textPoints;				
	document.getElementById('modifyDescriptionTop'+talentID).innerHTML = rankString;	
    document.getElementById('modifyRankTop'+talentID).innerHTML = rankTop[talentID][0];
    document.getElementById('modifyRankTopDescription'+talentID).innerHTML = rankTop[talentID][0];
    //document.getElementById('modifyRankPoints').innerHTML = rankPointsMax - rankPoints;
    document.getElementById('levelRequired').innerHTML = rankPointsMax - rankPoints + levelMin - 1;	
    document.getElementById('spec' + theTree).innerHTML = pointsTree[theTree];
    document.getElementById('tabPointsAvailable').innerHTML = rankPoints;	
    document.getElementById(tree[theTree]+'tabPoints').innerHTML = pointsTree[theTree];		
	canTurnGreen(pointsTree[theTree], theTree, oldMaxTier);
	
	changeCopyURL();
}

function changeCopyURL(){
	templateString = "";
	
	for (i = 0; talent[i]; i++) {
		templateString = templateString + rankTop[i][0]
	}
	history.pushState(null, null, '' + className + '.htm?' + templateString);
    document.getElementById('copyURL').innerHTML = textToSave + '<a href="' + className + '.htm?' + templateString + '"> ' + className + '.htm?' + templateString + '</a>';	
}

function rankTopOnRightClick(talentID) {
	var theTree = talent[talentID][0];				
	var oldMaxTier = maxTierArray[theTree];
	
	if (!canUnlearn(talentID, 1, oldMaxTier))
		return;		
	
	var maxRank = talent[talentID][3];
	var theTier = talent[talentID][5];	
	var theTierIndex = theTier - 1;	
	var rankString = rankTop[talentID][1];
	
	if (rankTop[talentID][0] > 0) {
		rankTop[talentID][0]--;						
		if (rankTop[talentID][0] - 1 != -1) {
			rankTop[talentID][1] = rank[talentID][(rankTop[talentID][0] - 1)];
			rankTop[talentID][2] = rank[talentID][(rankTop[talentID][0])];
			rankString = rankTop[talentID][1] + '<br><br><font color = "ffffff">' + textNextRank +'</font><br>'+ rankTop[talentID][2];			
		} else {
			rankTop[talentID][1] = rank[talentID][rankTop[talentID][0]];			
			rankString = rankTop[talentID][1];
		}
		
		//rank 0
		if (rankTop[talentID][0] == 0) {
			//hide the option to rank up.	
			document.getElementById('textLeftClick'+ talentID).style.color = "#1ae91b";
			document.getElementById('textLeftClick'+ talentID).innerHTML = textLeftClick;			
		}
		//green
		else {
			document.getElementById('textLeftClick'+ talentID).innerHTML = "";			
		}
		
		rankPoints++;
		
		//keep track of points in the tier		
		pointsTree[theTree]--;					
		pointsTier[theTree][theTierIndex]--;
		
		document.getElementById('iconOverYellow'+ talentID).style.visibility = "hidden";			
		document.getElementById('iconOverGreen'+ talentID).style.visibility = "visible";
		
		if (rankTop[talentID][0] == 0) {
			document.getElementById('iconOverGreen'+ talentID).style.visibility = "hidden";
			document.getElementById('iconOverYellow'+ talentID).style.visibility = "hidden";
			document.getElementById("talentThumb"+ talentID).style.visibility = "hidden";
			
			if (talent[talentID][6])
				document.getElementById("arrowYellow"+ talentID).style.visibility = "hidden";
			
			oldMaxTier = getMaxTier(theTree);
			maxTierArray[theTree] = oldMaxTier;
		}
		
		if (rankPoints == 1) {
			canTurnGreen(pointsTree[0], 0, maxTierArray[0]);		
			canTurnGreen(pointsTree[1], 1, maxTierArray[1]);		
			canTurnGreen(pointsTree[2], 2, maxTierArray[2]);								
		}
	}
	
	if (pointsTree[theTree] == 1)
		document.getElementById(tree[theTree] + 'tabPointsText').innerHTML = textPoint;			
	else	
		document.getElementById(tree[theTree] + 'tabPointsText').innerHTML = textPoints;				
	
    document.getElementById('modifyDescriptionTop' + talentID).innerHTML = rankString;
	
    document.getElementById('modifyRankTop' + talentID).innerHTML = rankTop[talentID][0];
    document.getElementById('modifyRankTopDescription' + talentID).innerHTML = rankTop[talentID][0];
    //document.getElementById('modifyRankPoints').innerHTML = rankPointsMax - rankPoints;	
    document.getElementById('levelRequired').innerHTML = rankPointsMax - rankPoints + levelMin - 1;	
	document.getElementById('spec' + theTree).innerHTML = pointsTree[theTree];	
    document.getElementById(tree[theTree] + 'tabPoints').innerHTML = pointsTree[theTree];	
    document.getElementById('tabPointsAvailable').innerHTML = rankPoints;		
	if (rankPoints != 1) canTurnGreen(pointsTree[theTree], theTree, oldMaxTier);
	changeCopyURL();
}

function unhideTalent(input) {
	document.getElementById("talentMouseOver" + input).style.visibility = "visible";
}

function hideTalent(input) {
	document.getElementById("talentMouseOver" + input).style.visibility = "hidden";
}

//changeColour function
/*function changeColour() {
	var specs = ['spec0', 'spec1', 'spec2'];
	for (var i = 0; i < specs.length; i++) {
		var uls = document.getElementsByTagName('ul');
		for (var j = 0; j < uls.length; j++) {
			if (uls[j].id == specs[i]) {
				var lis = uls[j].getElementsByTagName('li');
				for (var k = 0; k < lis.length; k++) {
					lis[k].style.color = '#8F8F8F';
				}
			}
		}
	}
}*/

jsLoaded=true;