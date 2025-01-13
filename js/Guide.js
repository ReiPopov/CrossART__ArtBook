const GuideControle = document.getElementById('GuideControle');
const GCA_left = document.getElementById('GCA-left');
const GCA_right = document.getElementById('GCA-right');

let guideCount = 1;

function PrevGuide() {
	if(guideCount !== 1){
		guideCount -= 1;
		CheckCurrentBlock()
	}
};

function NextGuide() {
	if(guideCount !== 6){
		guideCount += 1;
		CheckCurrentBlock()
	}
};

function CheckCurrentBlock() {
	document.querySelector('div.block.active').style.minWidth = '300px';
	document.querySelector('div.block.active').classList.remove('active');

	document.querySelector('label.active').style.width = '50px';
	document.querySelector('label.active').classList.remove('active');
	document.querySelector('a.active').classList.remove('active');

	document.querySelector('div.block.first').style.filter = 'grayscale(100%)';
	document.querySelector('div.block.second').style.filter = 'grayscale(100%)';
	document.querySelector('div.block.third').style.filter = 'grayscale(100%)';
	document.querySelector('div.block.fourth').style.filter = 'grayscale(100%)';
	document.querySelector('div.block.fifth').style.filter = 'grayscale(100%)';
	document.querySelector('div.block.sixth').style.filter = 'grayscale(100%)';
	
	document.querySelector('div.block.first').querySelector('p').innerText = 'Мир Crossout.';
	document.querySelector('div.block.second').querySelector('p').innerText = 'ART BOOK мира Crossout.';
	document.querySelector('div.block.third').querySelector('p').innerText = 'Фотогазета мира Crossout.';
	document.querySelector('div.block.fourth').querySelector('p').innerText = 'Книжная полка Crossout.';
	document.querySelector('div.block.fifth').querySelector('p').innerText = 'Радиоэфир мира Crossout.';
	document.querySelector('div.block.sixth').querySelector('p').innerText = 'Арт крафты мира Crossout.';
	if(guideCount === 1){
		document.querySelector('div.block.first').classList.add('active');
		document.querySelector('div.block.active').style.filter = 'grayscale(0%)';
		document.querySelector('div.block.active').querySelector('p').innerText = 'Мир Crossout — это опустошённые земли, где царят разруха и хаос. Брошенные города, разрушенные заводы и радиоактивные пустоши скрывают ценные ресурсы. Здесь каждый выживает, как может: создаёт боевые машины, сражается за территорию и формирует новые альянсы.';
		document.querySelector('label.l1').classList.add('active');
		document.querySelector('a.a1').classList.add('active');

		document.querySelector('div.block.active').style.minWidth = '720px';
		document.querySelector('label.l1.active').style.width = '300px';
		document.querySelector('div.block.first').style.marginLeft = '10px';

	}else if(guideCount === 2){
		document.querySelector('div.block.second').classList.add('active');
		document.querySelector('div.block.active').style.filter = 'grayscale(0%)';
		document.querySelector('div.block.active').querySelector('p').innerText = 'ART BOOK мира Crossout — это собрание мрачной эстетики Пустошей. Страницы раскрывают детали разрухи, концепты уникальных боевых машин, портреты выживших и яркие сцены их сражений. Каждый разворот — взгляд в безумный мир постапокалипсиса.';
		document.querySelector('label.l2').classList.add('active');
		document.querySelector('a.a2').classList.add('active');

		document.querySelector('div.block.active').style.minWidth = '720px';
		document.querySelector('label.l2.active').style.width = '300px';
		document.querySelector('div.block.first').style.marginLeft = '-300px';

	}else if(guideCount === 3){
		document.querySelector('div.block.third').classList.add('active');
		document.querySelector('div.block.active').style.filter = 'grayscale(0%)';
		document.querySelector('div.block.active').querySelector('p').innerText = 'Фотогазета мира Crossout — это хрупкие осколки прошлого и хроника настоящего. На её страницах запечатлены разрушенные города, герои Пустоши и ожесточённые схватки. В ней мрачные кадры заменяют слова, передавая историю выживания и борьбы за ресурсы.';
		document.querySelector('label.l3').classList.add('active');
		document.querySelector('a.a3').classList.add('active');

		document.querySelector('div.block.active').style.minWidth = '720px';
		document.querySelector('label.l3.active').style.width = '300px';
		document.querySelector('div.block.first').style.marginLeft = '-610px';

	}else if(guideCount === 4){
		document.querySelector('div.block.fourth').classList.add('active');
		document.querySelector('div.block.active').style.filter = 'grayscale(0%)';
		document.querySelector('div.block.active').querySelector('p').innerText = 'Книжная полка Crossout хранит истории тех, кто пережил катастрофу. Дневники, мемуары и рассказы о боли, надежде и борьбе за жизнь раскрывают трагедии и подвиги выживших в беспощадных Пустошах.';
		document.querySelector('label.l4').classList.add('active');
		document.querySelector('a.a4').classList.add('active');

		document.querySelector('div.block.active').style.minWidth = '720px';
		document.querySelector('label.l4.active').style.width = '300px';
		document.querySelector('div.block.first').style.marginLeft = '-802px';

	}else if(guideCount === 5){
		document.querySelector('div.block.fifth').classList.add('active');
		document.querySelector('div.block.active').style.filter = 'grayscale(0%)';
		document.querySelector('div.block.active').querySelector('p').innerText = 'Радиоэфир мира Crossout — это пульс Пустоши. В эфире звучат передачи выживших, тревожные сводки и редкие сообщения, передающие последние новости о событиях и угрозах, с которыми сталкиваются обитатели разрушенного мира.';
		document.querySelector('label.l5').classList.add('active');
		document.querySelector('a.a5').classList.add('active');

		document.querySelector('div.block.active').style.minWidth = '720px';
		document.querySelector('label.l5.active').style.width = '300px';
		document.querySelector('div.block.first').style.marginLeft = '-802px';

	}else if(guideCount === 6){
		document.querySelector('div.block.sixth').classList.add('active');
		document.querySelector('div.block.active').style.filter = 'grayscale(0%)';
		document.querySelector('div.block.active').querySelector('p').innerText = 'Арт крафты мира Crossout — это творения из металла и обломков. Каждое произведение отражает жестокую красоту Пустошей: боевые машины, оружие и декорации, созданные выжившими, чтобы отразить индивидуальность и выжить в этом беспощадном мире.';
		document.querySelector('label.l6').classList.add('active');
		document.querySelector('a.a6').classList.add('active');

		document.querySelector('div.block.active').style.minWidth = '720px';
		document.querySelector('label.l6.active').style.width = '300px';
		document.querySelector('div.block.first').style.marginLeft = '-802px';

	}
};