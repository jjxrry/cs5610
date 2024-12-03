GENERAL:
- we need to add the project repo and relink in the main page
- deploy that bitch


QUIZZES SCREEN:
DONE


PREVIEW QUIZ COMPONENT:
- Create the preview quiz, its the same as TakeQuiz without the submission
    - fetch the userAnswers for the latest attempt.score[-1]
    - compare with quizDetails.answers.correctAnswer, then highlight the selection


TAKE QUIZ COMPONENT:
- (OPTIONAL if no time) add the correct answer vs wrong answer/quiz review component


QUIZ QUESTIONS:
- (OPTIONAL)fix that default value bug for question fields


DONE:
- FIX THE QUESTION TYPE AND TEXT NOT SAVING ON HANDLESAVE, works with HANDLEADDQUESTION
- Handle populating multiple choice question options field correctly
- add questions to the quiz object array
    - handle the add to array
    - handle populating the object fields before appending to array
- add functionality to all types of questions
- Need to fix quiz details ui, if we did successfully add, then we need to render new question creation fields
- We also need to render all the previous questions and handle those edits as well
    - handle the editing and deletion of existing quiz questions
- we need a mongodb object type schema to track quiz grades
    - quiztakerId: objectid
    - courseId: objectid
    - quizId: objectid
    - latest: true
- Add Protected Controls if user is faculty to prevent editing
- Create the TakeQuiz component
- ADD THE ROUTES, ADD THE CLIENT REQUESTS
- Finish handleAttemptSubmission
- Issue with submission answer/score tracking, we need to fix the compare for userAnswer[i] === question[i].answer
- need state to handle if prevScores !== [] AND role === "STUDENT", render a div for previous highest score
- implement the attempt limit in Details component
- quiz attempts aren't being fetched based on userId correctly
- quiz submission keeps creating new attempts instead of appending to the same attempt.scores
- points will be set in totalPoints, where we can sum the value of each question with foreach(q => sum + q.value)
- (IMPORTANT) under quiz title needs availability, also needs the score if current user === student
    - closed if currDate is after avail until date
    - avail if currentdate is between avail date and avail until
    - not available until avail date if the currDate is before avail date
- (IMPORTANT) add latest score per quiz
- the 3 vertical dots on each of the quizzes need to have edit/delete/publish
