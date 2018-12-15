/**********************************************************************
 * 
 * Component that triggers event = gameboard/user screen to move to 
 * 
 *          StartGame = Rules/SkipRules
 *          SkipRules = RoundNumber/Blank
 *     QuestionNumber = QuestionAsk/Answer
 *        QuestionAsk = AnswerPlaceBets/PlaceBets
 *    AnswerPlaceBets = AnswerSeeBets/Blank
 *  LeaderBoard = Congrats/PlayAgain
 *          PlayAgain = RoundNumber/Blank
 * AnswersLeaderBoard = QuestionNum/Blank
 *
 *********************************************************************/
export const screens = {
    StartGame: 1, 
    SkipRules: 2, 
    QuestionNumber: 3, 
    QuestionAsk: 4, 
    AnswerPlaceBets: 5, 
    LeaderBoard: 6,
    PlayAgain: 7,
    AnswersLeaderBoard: 8,
    NewUsers: 9
}
