const dayjs = require('dayjs');

function birthday(date){
  const birthday = dayjs(date);
  const today = dayjs();

  //calculando a diferença entre o nascimento e data de dia para calcular a idade da pessoa
  const ageInYears = today.diff(birthday, 'year');

  //calculando a proxima data de aniversário da pessoa.
  const nextBirthDay = birthday.add(ageInYears + 1, 'year');

  //calculando os dias para a proximo aniversário.
  const daysNextBirthDay = nextBirthDay.diff(today, 'day') + 1;

  console.log(`Idade: ${ageInYears}`);
  console.log(`Proximo aniversário: ${nextBirthDay.format("DD/MM/YYYY")}`);
  console.log(`Dias até o próximo aniversário: ${daysNextBirthDay}`);
}

birthday('1997-05-04');