var dt = document.getElementById('data');
var data = new Date();
var dia = new Array ("Dominngo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado")
var mes = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", )

dt.innerHTML = dia[data.getDay()] + ", " + data.getDate() + " de " + mes[data.getMonth()] + " de " + data.getFullYear() + ".";