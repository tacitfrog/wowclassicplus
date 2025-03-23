var i = 0;

var arrowYellowStyle = "hidden";
var arrowGreenStyle = "hidden";
var headerReplaceString = "";
var iconReplaceString = "";
var talentsReplaceString = "";
var titleReplaceString = "";

var talentDisplay = (className == "druid" || className == "hunter" || className == "mage" || className == "paladin" || className == "priest" || className == "rogue" || className == "shaman" || className == "warlock" || className == "warrior") ? true : false;
var talentDescriptionArray = new Array;

var imgDir = "";

//output the header
headerReplaceString += '<table><tr><td class="header"><a href="index.html">WOW Classic+ Project</a></td><td class="version">(v' + version + ' - desktop view)</td></tr></table>';

//output the icons
iconReplaceString += '<!--<div class="iconHolder"><a href="druid.htm" title="Druid Talents" class="druid ' + (className=="druid"?"druidactive":"") + '"><img class="classIcon" src="img/class_druid.jpg"></a></div><//--><div class="iconHolder"><a href="hunter.htm" title="Hunter Talents" class="hunter ' + (className=="hunter"?"hunteractive":"") + '"><img class="classIcon" src="img/class_hunter.jpg"></a></div><div class="iconHolder"><a href="mage.htm" title="Mage Talents" class="mage ' + (className=="mage"?"mageactive":"") + '"><img class="classIcon" src="img/class_mage.jpg"></a></div><!--<div class="iconHolder"><a href="paladin.htm" title="Paladin Talents" class="paladin ' + (className=="paladin"?"paladinactive":"") + '"><img class="classIcon" src="img/class_paladin.jpg"></a></div><//--><!--<div class="iconHolder"><a href="priest.htm" title="Priest Talents" class="priest ' + (className=="priest"?"priestactive":"") + '"><img class="classIcon" src="img/class_priest.jpg"></a></div><//--><div class="iconHolder"><a href="rogue.htm" title="Rogue Talents" class="rogue ' + (className=="rogue"?"rogueactive":"") + '"><img class="classIcon" src="img/class_rogue.jpg"></a></div><!--<div class="iconHolder"><a href="shaman.htm" title="Shaman Talents" class="shaman ' + (className=="shaman"?"shamanactive":"") + '"><img class="classIcon" src="img/class_shaman.jpg"></a></div><//--><div class="iconHolder"><a href="warlock.htm" title="Warlock Talents" class="warlock ' + (className=="warlock"?"warlockactive":"") + '"><img class="classIcon" src="img/class_warlock.jpg"></a></div><!--<div class="iconHolder"><a href="warrior.htm" title="Warrior Talents" class="warrior ' + (className=="warrior"?"warrioractive":"") + '"><img class="classIcon" src="img/class_warrior.jpg"></a></div><//--><span class="divider">|</span><div class="iconHolder"><a href="alchemy.htm" title="Alchemy" class="' + (className=="Alchemy"?"active":"") + '"><img class="classIcon" src="img/profession_alchemy.jpg"></a></div><div class="iconHolder"><a href="blacksmithing.htm" title="Blacksmithing" class="' + (className=="Blacksmithing"?"active":"") + '"><img class="classIcon" src="img/profession_blacksmithing.jpg"></a></div><div class="iconHolder"><a href="enchanting.htm" title="Enchanting" class="' + (className=="enchanting"?"active":"") + '"><img class="classIcon" src="img/profession_enchanting.jpg"></a></div><div class="iconHolder"><a href="engineering.htm" title="Engineering" class="' + (className=="Engineering"?"active":"") + '"><img class="classIcon" src="img/profession_engineering.jpg"></a></div><div class="iconHolder"><a href="leatherworking.htm" title="Leatherworking" class="' + (className=="leatherworking"?"active":"") + '"><img class="classIcon" src="img/profession_leatherworking.jpg"></a></div><div class="iconHolder"><a href="tailoring.htm" title="Tailoring" class="' + (className=="Tailoring"?"active":"") + '"><img class="classIcon" src="img/profession_tailoring.jpg"></a></div><div class="iconHolder"><a href="gathering.htm" title="Gathering Professions" class="' + (className=="Gathering Professions"?"active":"") + '"><img class="classIcon" src="img/profession_herbalism.jpg"></a></div><div class="iconHolder"><a href="poisons.htm" title="Poisons (Rogue)" class="' + (className=="poisons"?"active":"") + '"><img class="classIcon" src="img/profession_poison.jpg"></a></div><br><div class="iconHolder"><a href="pve.htm" title="PvE" class="' + (className=="PvE"?"active":"") + '"><img class="classIcon" src="img/pve.jpg"></a></div></span><div class="iconHolder"><a href="karazhan.htm" title="Karazhan" class="' + (className=="karazhan"?"active":"") + '"><img class="classIcon" src="img/karazhan.jpg"></a></div><div class="iconHolder"><a href="lordkazzak.htm" title="Lord Kazzak" class="' + (className=="Lord Kazzak"?"active":"") + '"><img class="classIcon" src="img/lordkazzak.jpg"></a></div><div class="iconHolder"><a href="ravenholdt.htm" title="Ravenholdt" class="' + (className=="ravenholdt"?"active":"") + '"><img class="classIcon" src="img/ravenholdt.jpg"></a></div><div class="iconHolder"><a href="darkmoonfaire.htm" title="Darkmoon Faire" class="' + (className=="Darkmoon Faire"?"active":"") + '"><img class="classIcon" src="img/darkmoonfaire.jpg"></a></div><span class="divider">|</span><div class="iconHolder"><a href="pvp.htm" title="PvP" class="' + (className=="PvP"?"active":"") + '"><img class="classIcon" src="img/pvp.jpg"></a></div><div class="iconHolder"><a href="battlegrounds.htm" title="Battlegrounds" class="' + (className=="battlegrounds"?"active":"") + '"><img class="classIcon" src="img/battlegrounds.jpg"></a></div><div class="iconHolder"><a href="fullmoon.htm" title="Full Moon" class="' + (className=="Full Moon"?"active":"") + '"><img class="classIcon" src="img/fullmoon.jpg"></a></div><span class="divider">|</span><div class="iconHolder"><a href="services.htm" title="Services" class="' + (className=="services"?"active":"") + '"><img class="classIcon" src="img/services.jpg"></a></div><div class="iconHolder"><a href="miscellaneous.htm" title="Miscellaneous" class="' + (className=="miscellaneous"?"active":"") + '"><img class="classIcon" src="img/miscellaneous.jpg"></a></div>';

if (talentDisplay) {
	talentsReplaceString += '<div id="classInformation"><span id="resetAll"><a href="" onclick="resetTreeAll();return false;"><img src="img/resetall.gif" border="0"></a></span><span id="classNameOverall"><span id="className"></span><span id="spec">(<span id="spec0" class="mySmallWhite">0</span>/<span id="spec1" class="mySmallWhite">0</span>/<span id="spec2" class="mySmallWhite">0</span>)</span></span><span id="PointsAvailOverall"><span id="PointsLeftText">Points left:</span><span id="tabPointsAvailable" class="mySmallWhite">51</span></span><span id="requiredLevelOverall"><span id="requiredLevelText">Required Level: </span><span id="levelRequired" class="mySmallWhite">9</span></span></div>';
	
	talentsReplaceString += '<div class="talentwrap1"><div class="talentwrap2"><table border = "0" cellpadding = "0" cellspacing = "0"><tr>';
	
	talentsReplaceString += '<div style = "position: relative; top: -12px; left: 13px;"><div style = "position: absolute;"></div></div>';
	iconSize = ' width = "43px" height = "45px"';
	
	talentsReplaceString += '<tr>';
	
	//finally we get to arrange and print out all the info
	for (var printTreeID = 0; printTreeID < numberOfTrees; printTreeID++) {
		var tier = 0;
		var treeID;		
		
		treeID = tree[printTreeID];	
		
		var treeName = treeID;
		treeName = treeName.toLowerCase();
		treeName = treeName.replace(" ", "");	
		
		//box top
		talentsReplaceString += '<td class="treeBlock"><table border = "0" cellpadding = "0" cellspacing = "0">';
		
		talentsReplaceString += '<tr><td class = "tabletopleft"></td>';
		talentsReplaceString += '<td class = "tabletop"></td>';
		talentsReplaceString += '<td class = "tabletopright"></td></tr>';
		
		talentsReplaceString += '<tr><td class = "tableleft"></td>';
		talentsReplaceString += '<td  style = "background: url(\'' + className + '_files/background' + printTreeID + '.jpg\') #000000 no-repeat; background-size: 100% 100%;">';	
		
		talentsReplaceString += '<div id = "'+ treeID +'Tree">';
		
		var vertical = tierNum;
		var verticalCounter;
		var horizontal = 4;			
		var horizontalCounter;	
		
		//begin while loop
		while (talent[i] && talent[i][0] == printTreeID &&  i != (talent.length - 1)) {
			talentsReplaceString += '<table border = "0" cellspacing = "0" cellpadding = "0"><tr><td class = "treePadding">';
			talentsReplaceString += '<table border = "0" cellpadding = "10" cellspacing = "0">';
			
			for (verticalCounter = 1; verticalCounter <= vertical; verticalCounter++)
			{
				talentsReplaceString += '<tr>';
				for (horizontalCounter = 1; horizontalCounter <= horizontal; horizontalCounter++)
				{
					talentsReplaceString += '<td class = "tdPaddingTen">';
					if (talent[i] && talent[i][4] == horizontalCounter && talent[i][5] == verticalCounter)
					{
						var imageName;
						var changeString = (talent[i][2] == '') ? '' : '-' + talent[i][2];
						talentName = talent[i][1];
						imageName = talentName;
						imageName = imageName.toLowerCase();
						imageName = imageName.replace(":", "");
						imageName = imageName.replace(" ", "");
						imageName = imageName.replace(" ", "");
						imageName = imageName.replace(" ", "");
						imageName = imageName.replace(" ", "");
						
						talentsReplaceString += '<div id = "wrapper99"><div id = "rankTopStyle"><table><tr><td nowrap class = "tdPaddingThree">';					
						//rank
						if (rankTop[i][0] == talent[i][3]) {
							talentsReplaceString += '<span id = "modifyRankTopColor'+ i +'" class = "mySmall2">';
							talentsReplaceString += '<span id = "modifyRankTop'+ i +'" class = "mySmall22">';
						} else if(rankTop[i][0] > 0 ) {
							talentsReplaceString += '<span id = "modifyRankTopColor'+ i +'" class = "mySmallGreen">';
							talentsReplaceString += '<span id = "modifyRankTop'+ i +'" class = "mySmallGreen2">';
						} else {
							talentsReplaceString += '<span id = "modifyRankTopColor'+ i +'" class = "mySmallOff">';
							talentsReplaceString += '<span id = "modifyRankTop'+ i +'" class = "mySmallOff2">';
						}
						
						talentsReplaceString += rankTop[i][0] +'</span>/'+ talent[i][3] +'</span></td></tr></table></div></div>';
						
						//description
						talentsReplaceString += '<div id = "talentMouseOver'+ i +'" style = "visibility: hidden;"><div id = "wrapper">';
						
						tierTalent = talent[i][5];
						
						if (printTreeID != 2 && tierTalent != vertical) {
							talentsReplaceString += '<div id = "descriptionTopStyle">';
						} else if (printTreeID == 2 && tierTalent != vertical)  {
							talentsReplaceString += '<div id = "descriptionTopStyleThird">';
						} else if (printTreeID != 2 && tierTalent == vertical) {
							talentsReplaceString += '<div id = "descriptionTopStyleBottom">';
						} else {
							talentsReplaceString += '<div id = "descriptionTopStyleThirdBottom">';
						}
						
						talentsReplaceString += '<table class="TalentTooltip" border = "0" cellpadding = "0" cellspacing = "0" style="width:300px;">';
						talentsReplaceString += '<tr><td><table width = "300px" border = "0" cellspacing = "0" cellpadding = "5" style="padding:5px;"><tr><td class = "tdPaddingFive">';
						talentsReplaceString += '<div id = "armoryOver' + i + '"><span style = "color: white; font-weight: bold;" class="talentNameStyle">' + talent[i][1] + '</span>';
						talentsReplaceString += '<br><span class = "rankTooltip">' + textRankColon +' <span id = "modifyRankTopDescription' + i +'" class = "rankTooltip">' + rankTop[i][0] + '</span>/' + talent[i][3] + '</span>';
						
						if (talent[i][6])	//if the talent requires other talents
						{
							requirement = talent[i][6][0];
							requirementPoints = talent[i][6][1];
							requirementName = talent[requirement][1];
							
							talentsReplaceString += '<span id="requiresTalent'+ i +'" style = "color: red" class = "mySmall"><br>' + requiresRequires + ' ' + requirementPoints +' '+ requiresPointsIn + ' ' + requirementName +'</span>';			
						}
						
						if (talent[i][5] != 1)	//if the talent requires other talents
						{ 
							talentsReplaceString += '<span id = "requiresPoints'+ i +'" style = "color: red" class = "mySmall"><br>' + requiresRequires + ' ' + ((talent[i][5]*5)-5) + ' ' + requiresPointsIn + ' ' + tree[talent[i][0]] + ' ' + requiresTalents +'</span>';
						}

						talentsReplaceString += '<br /><span id = "modifyDescriptionTop'+ i +'" style = "display: block; color: #FFFFFF" class="talentDescriptionStyle q">'+ rankTop[i][1] +'</span>';							

						talentsReplaceString += '<table border = "0" cellpadding = "0" cellspacing = "0" width = "100%" height = "0"><tr><td width = ""><span id="textLeftClick' + i + '" style = "color: #1ae91b; font-size: 12px;">'+ textLeftClick +'</span></td><td width = "50%" align = "right"><span id="textRightClick' + i + '" style = "color: #fb1410; font-size: 12px;"></span></td></tr></table>';	
						
						talentsReplaceString += '</div></td></tr></table></td><td bgcolor = "#a5a5a5" width = "1"><div style = "width: 1px;"></div></td></tr><tr><td></td><td bgcolor = "#4f4f4f" height = "2"></td><td></td></tr></table></div></div></div>';
						
						talentsReplaceString += '<div style = "z-index: 99999; position: relative;"><div style = "top: -2px; left: -2px; position: absolute;"><img src = "' + pixelGif + '" width = "50px" height = "50px" border = "0" onClick = "rankTopOnClick('+ i +');" onMouseOver = "unhideTalent('+ i +');" onMouseOut = "hideTalent('+ i +');" onContextMenu = "rankTopOnRightClick('+ i +'); return false;" /></div></div>';
						
						talentsReplaceString += '<div style = "z-index: 50; position: relative;"><div style = "top: -2px; left: -2px; position: absolute;"><img src = "img/icon-over-grey'+changeString+'.png" border = "0" /></div></div>';
						
						if (rankTop[i][0] >= 1)
							talentsReplaceString += '<div id = "iconOverGreen' + i + '" style = "position: relative; z-index:50;"><div id = "iconOver"><img src = "img/icon-over-green'+changeString+'.png" border = "0" /></div></div>';
						else
							talentsReplaceString += '<div id = "iconOverGreen' + i + '" style = "visibility:hidden; position: relative; z-index:50;"><div id = "iconOver"><img src = "img/icon-over-green'+changeString+'.png" border = "0"></div></div>';
						
						if (rankTop[i][0] == talent[i][3])
							talentsReplaceString += '<div id = "iconOverYellow' + i + '" style = "position: relative; z-index:50;"><div id = "iconOver"><img src = "img/icon-over-yellow'+changeString+'.png" border = "0"></div></div>';
						else 
							talentsReplaceString += '<div id = "iconOverYellow' + i + '" style = "visibility:hidden; position: relative; z-index:50;"><div id = "iconOver"><img src = "img/icon-over-yellow'+changeString+'.png" border = "0"></div></div>';
						
						if (rankTop[i][0] == 0)							
							talentsReplaceString += '<div id = "talentThumb' + i + '" style = "visibility: hidden; position: relative;"><div id = "wrapper49"><img src = "' + className + '_files/' + imageName + '.jpg" border = "0" '+ iconSize +'></div></div>';
						else
							talentsReplaceString += '<div id = "talentThumb' + i + '" style = "position: relative"><div id = "wrapper49"><img src = "' + className + '_files/' + imageName + '.jpg" border = "0" '+ iconSize + '></div></div>';
						
						if (talent[i][6]) {
							thisTalentX = talent[i][4];		
							thisTalentY = talent[i][5];

							requiredTalentX = talent[requirement][4];
							requiredTalentY = talent[requirement][5];

							if (query) {
								if (saveTemplate[i] == talent[i][3]) {
									arrowYellowStyle = "visible";
									arrowGreenStyle = "hidden";
								} else if (saveTemplate[i] > 0) {
									arrowYellowStyle = "hidden";
									arrowGreenStyle = "visible";
								} else {
									arrowYellowStyle = "hidden";
									arrowGreenStyle = "hidden";
								}
							} else {
									arrowYellowStyle = "hidden";
									arrowGreenStyle = "hidden";
							}
							
							if (thisTalentX == requiredTalentX) {  //up and down
								if ((thisTalentY - 1) == requiredTalentY) {
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown1"><img src = "img/down-1-grey.gif"></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown1"><span id="arrowGreen'+ i +'" style = "visibility:'+ arrowGreenStyle +';"><img src = "img/down-1-green.gif"></span></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown1"><span id="arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "img/down-1-yellow.gif"></span></div></div>';
								} else if ((thisTalentY - 2) == requiredTalentY) {
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown2"><img src = "img/down-2-grey.gif"></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown2"><span id = "arrowGreen'+ i +'" style = "visibility:'+ arrowGreenStyle +';"><img src = "img/down-2-green.gif"></span></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown2"><span id = "arrowYellow'+ i +'" style = "visibility:'+ arrowYellowStyle +';"><img src = "img/down-2-yellow.gif"></span></div></div>';
								} else if ((thisTalentY - 3) == requiredTalentY) {
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown3"><img src = "img/down-3-grey.gif"></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown3"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "img/down-3-green.gif"></span></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown3"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "img/down-3-yellow.gif"></span></div></div>';
								} else if ((thisTalentY - 4) == requiredTalentY) {
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown4"><img src = "img/down-4-grey.gif"></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown4"><span id = "arrowGreen'+ i +'" style = "visibility:'+ arrowGreenStyle +';"><img src = "img/down-4-green.gif"></span></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown4"><span id="arrowYellow'+ i +'" style = "visibility:'+ arrowYellowStyle +';"><img src = "img/down-4-yellow.gif"></span></div></div>';
								}
							} else if (thisTalentY == requiredTalentY) {  //across
								if (requiredTalentX == (thisTalentX - 1)) {
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowacrossright"><img src = "img/across-right-grey.gif"></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowacrossright"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "img/across-right-green.gif"></span></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowacrossright"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "img/across-right-yellow.gif"></span></div></div>';
								} else if (requiredTalentX == (thisTalentX + 1)) {
									talentsReplaceString += '<div id = "wrapper51"><div class = "arrowacrossleft"><img src = "img/across-left-grey.gif"></div></div>';
									talentsReplaceString += '<div id = "wrapper51"><div class = "arrowacrossleft"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "img/across-left-green.gif"></span></div></div>';
									talentsReplaceString += '<div id = "wrapper51"><div class = "arrowacrossleft"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "img/across-left-yellow.gif"></span></div></div>';
								}
							} else if (thisTalentX == (requiredTalentX - 1)){
								if ((thisTalentY - 1) == requiredTalentY) {												
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdownleft"><img src = "img/down-left-grey.gif"></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdownleft"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "img/down-left-green.gif"></span></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdownleft"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "img/down-left-yellow.gif"></span></div></div>';
								} else {
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown2left"><img src = "img/down-2-left-grey.gif"></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown2left"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "img/down-2-left-green.gif"></span></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown2left"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "img/down-2-left-yellow.gif"></span></div></div>';
								}
							} else if ((thisTalentX - 1) == requiredTalentX) {								
								if ((thisTalentY - 1) == requiredTalentY) {				
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdownright"><img src = "img/down-right-grey.gif"></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdownright"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "img/down-right-green.gif"></span></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdownright"><span id = "arrowYellow'+ i +'" style = "visibility:'+ arrowYellowStyle +';"><img src = "img/down-right-yellow.gif"></span></div></div>';
								} else {
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown2right"><img src = "img/down-2-right-grey.gif"></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown2right"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "img/down-2-right-green.gif"></span></div></div>';
									talentsReplaceString += '<div id = "wrapper50"><div class = "arrowdown2right"><span id = "arrowYellow'+ i +'" style = "visibility:'+ arrowYellowStyle +';"><img src = "img/down-2-right-yellow.gif"></span></div></div>';									
								}
							}
						}
						talentsReplaceString += '<img src = "' + className + '_files/' + imageName + '-off.jpg" border = "0" ' + iconSize +'>';
						i++;
					}
					else
						talentsReplaceString += "&nbsp;";
					talentsReplaceString += "</td>";						
				}
				talentsReplaceString += "</tr>";
			}
			talentsReplaceString += "</table></td></tr></table>";
			talentsReplaceString += "</div>";		
		}
		
		//box bottom
		talentsReplaceString += '</td><td class = "tableright"><div style = "width: 1px;"></div></td></tr>';
		talentsReplaceString += '<tr><td class = "tablebotleft"></td>';
		
		talentsReplaceString += '<td class="tablebot">';
		talentsReplaceString += '<table border="0" cellpadding="0" cellspacing="0">';
		talentsReplaceString += '\
		<tr>\
			<td width="100%" nowrap class="tablebotbot">\
				<div class="talenttreename">\
					<img src="' + className + '_files/icon' + printTreeID +'.png" class="p talenttreeicon" align="left"><span class = "treeName">&nbsp;'+ tree[printTreeID] +'</span><span class = "treeColon">'+ textColon +' <span class = "treePoint" id="'+tree[printTreeID]+'tabPoints">'+ pointsTree[printTreeID] + '</span> <span class = "treePoints" id="'+tree[printTreeID]+'tabPointsText">'+ textPoints +'</span></span><a id = "hideReset'+ printTreeID +'" href = "" onclick = "resetTree('+ printTreeID +');return false;"><img src = "img/reset.gif" border = "0"></a></nobr>\
				</div>\
			</td>\
		</tr>\
		</table>';
		
		talentsReplaceString += '</td><td class = "tablebotright"></td></tr>';
		
		talentsReplaceString += "</table></td>";	
	}
	
	talentsReplaceString += "</tr></table></div></div>";
	
	talentsReplaceString += '<div>';
	
	talentsReplaceString += '<div id = "linkBox">';
	
	talentsReplaceString += '<p id="copyURL"></p>';
	
	talentsReplaceString += '<span class="sourceCredits">'+ textToSource +'</span></div>';
	
	talentsReplaceString += '<div id = "legendBox"><span class="legendText">LEGENDS:</span><ul><li class="talentMoved"><span>Moved Talent</span></li><li class="talentChanged"><span>Modified Talent</span></li><li class="talentNew"><span>New Talent</span></li></ul></div>';
	//changeColour button: <a href="" onclick="changeColour();return false;"><img src="img/reset.gif" border="0"></a>
	
	talentsReplaceString += '</div>';
}
else {
	titleReplaceString += '<div id="classInformation"><span id="classNameOverall"><span id="className"></span></span></div>';
}

document.getElementById('replaceMeWithHeader').innerHTML = headerReplaceString;
document.getElementById('replaceMeWithIcons').innerHTML = iconReplaceString;
if (talentDisplay) document.getElementById('replaceMeWithTalents').innerHTML = talentsReplaceString;
if (!talentDisplay) document.getElementById('replaceMeWithTitle').innerHTML = titleReplaceString;
if (className == "index") document.getElementById('className').innerHTML = 'Welcome';
else if (className == "poisons") document.getElementById('className').innerHTML = 'Poisons (<a class="rogue" href="rogue.htm">Rogue</a>)';
else document.getElementById('className').innerHTML = className.charAt(0).toUpperCase() + className.slice(1);
document.getElementById('className').classList.add(className);

if (talentDisplay) {
	//fill information based on provided string
	for (i = 0; i < 3; i++) {
		document.getElementById('spec' + i).innerHTML = pointsTree[i];	
	}
	//required level
	document.getElementById('levelRequired').innerHTML = rankPointsMax - rankPoints + levelMin - 1;
	//pointsLeft
	document.getElementById('tabPointsAvailable').innerHTML = rankPoints;
	
	canTurnGreen(0, 0, 1);
	canTurnGreen(0, 1, 1);
	canTurnGreen(0, 2, 1);
	
	changeCopyURL();
	
	//handle setting up the green rows past the first tier
	for (i = 0; i < 3; i++) canTurnGreen(pointsTree[i], i, maxTierArray[i]);
}

jsLoaded=true;