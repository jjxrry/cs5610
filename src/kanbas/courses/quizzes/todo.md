GENERAL:

we need that backend schema to track quiz grades
quiztakerId: objectid
courseId: objectid
quizId: objectid
latest: true

we need to be able to take the quiz itself

QUIZZES SCREEN:
the 3 vertical dots on each of the quizzes need to have edit/delete/publish
under quiz title needs availability, also needs the score if current user === student
points will be set in totalPoints, where we can sum the value of each question with foreach(q => sum + q.value)


QUIZ DETAILS:
Add quiz preview functionality
fill out all of the details on the screen


QUIZ QUESTIONS:
add questions to the quiz object array
add functionality to all types of questions
