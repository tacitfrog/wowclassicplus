var version = "1.2.2"

var pixelGif = "img/pixel.gif";

var talent = new Array();
var rank = new Array();
var tree = new Array();
var rankBottom = new Array();
var minLevel = new Array();
var hasDependentTalents = new Array();
var treeStartStop = new Array();
var rankTop = new Array();
var pointsTree = new Array();
var maxTierArray = new Array();
maxTierArray[0] = 1;
maxTierArray[1] = 1;
maxTierArray[2] = 1;

var template = new Array();

var levelMax = 60;
var levelMin = 10;
var tierNum = 7;

var rankPoints = levelMax - levelMin + 1;
var rankPointsMax = rankPoints;
var levelCurrent = levelMax;
var theRequiredLevel = levelMin - 1;

var textLevelRequired = "Level Required:";
var textPointsLeft = "Points Left:";
var textPointsSpent = "Points Spent:";
var textPoint = "point";
var textPoints = "points";
var textColon = ":";
var textLeftClick = "Click to Learn";
var textRightClick = "Right Click to Unlearn";
var textRankColon = "Rank:"
var textToSave = "Link to this build:";
var textToSource = "(This calculator is built on code from <a href='https://iradei.eu/talent-calculators'>Ira Dei</a>.  Some ideas are taken from TBC, WOTLK, SOD, and <a href='https://djimovanberlo.github.io/tc-ts'>this project</a>.)"
var textNextRank = "Next Rank:";
var requiresRequires = "Requires";
var requiresPointsIn = "points in";
var requiresTalents = "Talents";

function getStringRequires(requirementPoints, requirementName) {
	theS = "s";
	if (requirementPoints == 1)
		theS = "";
	var theString = 'Requires '+ requirementPoints +' point'+ theS +' in '+ requirementName;
	return theString;
}

function getStringRequiresTalents(requirementPoints, requirementName) {
	var theString = 'Requires '+ requirementPoints +' points in '+ requirementName +' Talents';
	return theString
}

jsLoaded=true;