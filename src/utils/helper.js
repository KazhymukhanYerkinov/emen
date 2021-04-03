export const getAnswersWithData = (data) => {
  let map_answered = new Map();
  let variants_data = data.variants;

  for (let i = 0; i < variants_data.length; i++) {

    // Әр сабақтың сұрақтарын аламыз
    let questions_data = variants_data[i].questions;

    // Әр сабақтың uuid кодын аламыз
    let uuid = variants_data[i].uuid;

    for (let j = 0; j < questions_data.length; j++) {

      // Сұрақтың is_group екенін аламыз
      let is_group = questions_data[j].is_group;

      // Сұрақтың id аламыз
      let question_id = questions_data[j].id;

      // Сұрақ is_group қа тексереміз
      if (is_group) {
        let group_questions = questions_data[j].questions;

        for (let k = 0; k < group_questions.length; k++) {

          // Group сұрақтардың жауаптарын аламыз
          let answers_data = group_questions[k].answers;

          // Group сұрақтың id аламыз
          let group_question_id = group_questions[k].id;

          // Жауаптарды сақтайтын лист ашамыз
          let answers_list = [];
          let is_save = false;

          for (let l = 0; l < answers_data.length; l++) {
            if (answers_data[l].is_answered) {
              answers_list.push(answers_data[l].id);
              is_save = true;
            }
          }

          if (is_save) {
            let object = {
              question: group_question_id,
              answer: answers_list,
              variant: uuid,
            }

            map_answered.set(group_question_id, object);
          }



        }
      }
      else {
        let answers_data = questions_data[j].answers;

        let answers_list = [];
        let is_save = false;

        for (let k = 0; k < answers_data.length; k++) {
          if (answers_data[k].is_answered) {
            answers_list.push(answers_data[k].id);
            is_save = true;
          }
        }

        if (is_save) {
          let object = {
            question: question_id,
            answer: answers_list,
            variant: uuid,
          }

          map_answered.set(question_id, object)
        }
      }
    }
  }

  return map_answered;
}


