const data = new Date();
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());