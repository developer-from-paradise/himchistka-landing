var skroll = new Skroll()
			.add(".about__img",{
				animation:"slideInLeft",
				delay:80,
				duration:800
			})
            .add(".about__info-text",{
				animation:"slideInRight",
				delay:80,
				duration:800
			})
            
            
            .init();