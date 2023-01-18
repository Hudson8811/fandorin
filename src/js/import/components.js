document.addEventListener('DOMContentLoaded', () => {
	let contentTitle = document.querySelector('.fate__content--title');
	let contentQuote = document.querySelector('.fate__content--quote');
	let button = document.querySelector(".fate__content--button");
	let book = document.querySelector(".fate__content--book");
	let soc = document.querySelector(".fate__content--soc");

	if(button !== null) {
		button.addEventListener("click", function(){
			let content = document.querySelector(".fate__content")	
			contentTitle.classList.add("activeText")
			contentQuote.classList.add("activeText")
			setTimeout(() => {
				contentTitle.classList.remove("activeText")
			}, "3200")
			setTimeout(() => {
				contentTitle.classList.remove("activeText")
				contentQuote.classList.remove("activeText")
				this.removeAttribute('disabled');
                this.classList.remove("active")
                book.classList.remove("active")
                soc.classList.remove("active")
			}, "4100")
			content.classList.add("active")
            book.classList.add("active")
            soc.classList.add("active")
			this.classList.add("active")
			this.textContent = "ЕЩЕ РАЗ"
			this.setAttribute('disabled', true);
			randomTitle();
		})
	}
	
	function randomTitle() {
		var quotes = new Array(
			"В этом году вас засыпят комплиментами", 
			"Ждите потрясающих подарков от судьбы",
			"Потрясения будут стараться обходить вас стороной",
			"Этот год закрутит вас в водовороте любовных чувств",
			"В новом году вас ждут большие карьерные достижения",
			"Год пройдет под знаком финансовой стабильности и благополучия",
			"Новый год – новые путешествия!",
			"Вам всегда будет сопутствовать удача!",
	)
	let numberTitle = Math.floor( Math.random() * quotes.length );
	let randomizeTitle = quotes[numberTitle];
	contentTitle.innerHTML = randomizeTitle;
	selectinglistQuotes(randomizeTitle);
	randomTitleNum(randomizeTitle, numberTitle) 
	}
	function selectinglistQuotes(x) {
		switch(x) {
			case "В этом году вас засыпят комплиментами":
				let listOne = new Array(
					"Сударыня! Говорил ли вам кто-нибудь прежде, что вы невыносимо прекрасны?", 
					"Юноша чистый, смелый, благородных устремлений.", 
					"Бриллинг Иван Францевич — птица высокого полета. Можно сказать, орел прегордый меж дроздами, абы кому важного дела не доверит.",
					"Понравился ты мне, ужас как понравился. Есть в тебе что-то... Не знаю, печать какая-то, что ли. У меня на таких, как ты, нюх. Я будто нимб у человека над головой вижу, этакое легкое сияние. Особые это люди, у кого нимб, судьба их хранит, от всех опасностей оберегает.",
					"Вы очень смышленый юноша и вызываете у меня искреннюю симпатию.",
					"Он отличается прекрасной реакцией, смел, обладает хорошо развитым логическим мышлением и уникальной интуицией.",
					"Он обладал прирожденным лидерским талантом: редкостная сила воли, дисциплинированность, умение безошибочно выделить в каждом человеке сильные и слабые стороны.",
				);
				randomQuote(listOne);
				break;
			case "Ждите потрясающих подарков от судьбы":
				let listTwo = new Array(
					"Судьба дает ему все — и богатство, и свободу, и образованность, и красоту.", 
					" Шеф, это я! — радостно объявил Фандорин, наслаждаясь эффектом. Эффект и в самом деле превзошел все ожидания.",
					"Гений у нас — редкость и даже чудо, а ведь кто такой гений? Это просто человек, которому повезло. Его судьба сложилась так, что жизненные обстоятельства сами подтолкнули человека к правильному выбору пути. ", 
					"Найти свой путь — самое главное в жизни любого человека.", 
					"Всяк сам хозяин своей судьбы.", 
				);
				randomQuote(listTwo);
				break;
			case "Потрясения будут стараться обходить вас стороной":
				let listTree = new Array(
					"Ничто не предвещало неприятностей, в воздухе, наполненном ароматами зрелой, уверенной весны, разливались ленивое довольство и отрадная скука.",
					"Правильное дыхание — основа правильной жизни. Оно поддержит тебя в трудные минуты бытия, в нем обретешь ты спасение, успокоение и просветление. Вдыхая жизненную силу прану, не спеши выдохнуть ее обратно, задержи ее в своих легких. Чем дольше и размеренней твое дыхание, тем больше в тебе жизненной силы.",
					"Но жить все равно было замечательно. Эраст Петрович окинул любовным взглядом серый речной простор (на той стороне ласково светились огоньки), умилился добротности приземистого пакгауза, одобрил мерное покачивание буксиров и баркасов, вытянувшихся вдоль пристани.",
				);
				randomQuote(listTree);
				break;
			case "Этот год закрутит вас в водовороте любовных чувств":
				let list4 = new Array(
					"Фандорин вскочил и поклонился, чувствуя себя прескверно. Девушка ему ужасно понравилась, и бедный письмоводитель испугался, что сейчас возьмет и влюбится в нее с первого взгляда, а делать этого никак не следовало.",
					"Эраст Петрович с завистью подумал, что красавца Ипполита, бесшабашную голову, очень даже есть за что полюбить и без всякого пожара. Такому молодцу, наверно, от женщин отбоя нет.",
					"Следует признаться, что головокружительные события последних недель несколько приглушили воспоминания о той, кого Эраст Петрович именовал про себя исключительно «Лизанькой», а иногда, в особенно мечтательные минуты, даже «нежным ангелом». Однако при виде этого милого создания огонек, некогда опаливший сердце бедного коллежского регистратора, моментально полыхнул жаром, обжег легкие огненными искорками.",
					"В обществе Лизаньки одинаково хорошо и говорилось, и молчалось. Смотрели в основном в окно, но по временам взглядывали и друг на друга, причем если взгляды ненароком пересекались, то это было совсем не стыдно, а наоборот, весело и приятно.",
					"Это редкостная женщина. Клеопатра. Кармен... Красоты неописуемой, но дело даже не в красоте... Магнетический взгляд. Нет, и взгляд не то... Вот главное: в ней ощущается огромная сила. Такая сила, что она со всеми будто играет.",
					"При виде женщины у Эраста Петровича чуть не вырвался торжествующий вопль — это была Бежецкая! С гладко зачесанными черными волосами, перетянутыми алой лентой, в кружевном пеньюаре, поверх которого была накинута цветастая цыганская шаль, она показалась ему ослепительно прекрасной. О, такой женщине можно простить любые прегрешения!",
				);
				randomQuote(list4);
				break;
			case "В новом году вас ждут большие карьерные достижения":
				let list5 = new Array(
					"Читал ваше донесение, — без малейшего перехода продолжил Бриллинг. — Толково. Наблюдательно. Результативно. Приятно удивлен вашей интуицией — это в нашем деле драгоценнее всего. Еще не знаешь, как разовьется ситуация, а чутье подсказывает принять меры. ",
					"Ваше высокопревосходительство, в интересах известного Вам дела, а также в признание исключительных заслуг прошу вне всякой очереди и без учета выслуги произвести коллежского регистратора Эраста Петровича Фандорина в титулярные советники.",
					"Я рассказал Лаврентию Аркадьевичу и о вас. Правда, вы не участвовали в финале, но все же очень помогли нам в ходе расследования. Если не возражаете, будем работать вместе и дальше. Я беру вашу судьбу в свои руки...",
					"Это был лучший из моих помощников, мое доверенное лицо! Он сделал блестящую карьеру, перед ним были открыты все дороги! Какой яркий, парадоксальный ум, какая инициативность, какая исполнительность!",
					"Какой это был самоотверженный, неутомимый работник! И редкостный лингвистический дар — без него мне было бы просто невозможно уследить за работой филиалов в стольких странах. ",
				);
				randomQuote(list5);
				break;
			case "Год пройдет под знаком финансовой стабильности и благополучия":
				let list6 = new Array(
					"И то сказать, состояние-то громадное. Я справлялся — две фабрики, три завода, дома в разных городах, верфи в Либаве, одних процентных бумаг в Государственном банке на полмиллиона!",
					"Я распоряжусь, чтобы вам из особого фонда выдали пятьсот рублей премиальных. За усердие и перенесенную опасность.",
				);
				randomQuote(list6);
				break;
			case "Новый год – новые путешествия!":
				let list7 = new Array(
					"Кстати, дипломатическую почту вы по дороге, действительно, развезете — в Берлин, Вену, Париж. Для конспирации, чтоб не вызывать лишних подозрений. Возражений нет? ",
					"Через проливчик я вас, ангел мой, конечно, переправлю — дело небольшое. Если не побрезгуете утлым рыбацким челном, завтра же поплывете себе с Богом. Ловя под парус ветр ревущий.",
				);
				randomQuote(list7);
				break;
			case "Вам всегда будет сопутствовать удача!":
				let list8 = new Array(
					"Услужливый швейцар успокоил Эраста Петровича, сказал, что господин Бриллинг дома, «пять минут как прибыли-с». Всё сегодня шло у Фандорина по шерстке, всё удавалось.",
				);
				randomQuote(list8);
				break;
			default:
				alert( "Нет таких значений" );
		}
	}	
	function randomQuote(list) {
		let randomizeQuoteNum =	Math.floor( Math.random() * list.length );
		let randomizeQuote = list[randomizeQuoteNum];
		contentQuote.innerHTML = randomizeQuote;
		randomQuoteNum(randomizeQuoteNum);
	}
	var url ={};
	function randomQuoteNum(a) {
		let x = a;
		url.value2 = x;
	};
	function randomTitleNum(name, num) {
		let a = name;
		let b = num;
		url.title = a;
		url.value1 = b;
		selectingAtributeSoc(url);
	};
	function selectingAtributeSoc(a) {
		let soc = document.querySelectorAll(".fate__content--soc__item");
		let dataTitle = a.title
		let numTitle = a.value1
		let numQuote = a.value2
		soc.forEach((item) => {
			let a = dataTitle;
			item.setAttribute("data-title", a)
			item.setAttribute("data-url",  `/share/${numTitle}/${numQuote}`)
		})
	}
});
