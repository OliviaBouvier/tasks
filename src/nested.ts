import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";
import { duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let published_questions: Question[] = questions.filter(
        (question: Question): boolean => {
            return question.published;
        },
    );
    return published_questions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let nonempty_questions: Question[] = questions.filter(
        (question: Question): boolean => {
            return (
                question.body !== "" ||
                question.expected !== "" ||
                question.options.length !== 0
            );
        },
    );
    return nonempty_questions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id === id) {
            return questions[i];
        }
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let new_questions: Question[] = questions.filter(
        (question: Question): boolean => {
            return question.id !== id;
        },
    );
    return new_questions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    let names: string[] = questions.map((question: Question): string => {
        return question.name;
    });
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let pointsArr: number[] = questions.map((question: Question): number => {
        return question.points;
    });
    let totalPoints: number = pointsArr.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let pointsArr: number[] = questions.map((question: Question): number => {
        if (question.published) {
            return question.points;
        } else {
            return 0;
        }
    });
    let totalPoints: number = pointsArr.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    return totalPoints;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let stringArr: string[] = questions.map((question: Question): string => {
        return `${question.id},${question.name},${question.options.length},${question.points},${question.published}`;
    });
    return "id,name,options,points,published\n" + stringArr.join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let answers: Answer[] = questions.map((question: Question): Answer => {
        return {
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false,
        };
    });
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    let newArr: Question[] = questions.map((question: Question): Question => {
        return { ...question, published: true };
    });
    return newArr;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let allSameType: boolean = questions.every(
        (question: Question): boolean => {
            return question.type === questions[0].type;
        },
    );
    return allSameType;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    let newArr: Question[] = questions.map((question: Question): Question => {
        if (question.id === targetId) {
            return { ...question, name: newName };
        }
        return question;
    });
    return newArr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    let newArr: Question[] = questions.map((question: Question): Question => {
        if (question.id === targetId) {
            let newQuestion = { ...question, type: newQuestionType };
            if (newQuestion.type !== "multiple_choice_question") {
                newQuestion.options = [];
            }
            return newQuestion;
        }
        return question;
    });
    return newArr;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    let newArr: Question[] = questions.map((question: Question): Question => {
        if (question.id === targetId) {
            let newQuestion: Question = { ...question };
            if (targetOptionIndex === -1) {
                newQuestion = {
                    ...question,
                    options: [...question.options, newOption],
                };
            } else {
                newQuestion = { ...question, options: [...question.options] };
                newQuestion.options[targetOptionIndex] = newOption;
            }
            return newQuestion;
        }
        return question;
    });
    return newArr;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    let index: number = questions.findIndex((question: Question): boolean => {
        return question.id === targetId;
    });
    let newQuestion: Question = duplicateQuestion(newId, questions[index]);
    let copy: Question[] = [...questions];
    copy.splice(index + 1, 0, newQuestion);
    return copy;
}
