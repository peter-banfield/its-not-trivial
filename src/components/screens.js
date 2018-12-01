/**********************************************************************
 * 
 * Component that triggers event = gameboard/user screen to move to 
 * 
 *          StartGame = Rules/SkipRules
 *          SkipRules = RoundNumber/Blank
 *     QuestionNumber = QuestionAsk/Answer
 *        QuestionAsk = AnswerPlaceBets/PlaceBets
 *    AnswerPlaceBets = AnswerSeeBets/Blank
 *  PointsLeaderBoard = Congrats/PlayAgain
 *
 *********************************************************************/
export const screens = {
    StartGame: 1, 
    SkipRules: 2, 
    QuestionNumber: 3, 
    QuestionAsk: 4, 
    AnswerPlaceBets: 5, 
    PointsLeaderBoard: 6,
    Blank: 7
}