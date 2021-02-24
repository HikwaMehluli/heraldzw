const settings = {
	"name": "thehearld",
	"state": {
		"frontity": {
			// "url": "https://www.herald.co.zw/",
			"url": "https://hearldzw.vercel.app/",
			"title": "The Herald",
			"description": "Zimbabwe's largest daily newspaper"
			
			// "url": "https://hearldzw.vercel.app/",
			// "title": "Daily News",
			// "description": "Telling it like it is"
		}
	},
	"packages": [
		{
			"name": "@frontity/mars-theme",
			"state": {
				"theme": {
					"menu": [
						// HEARLD
						["Home", "/"],
						["Africa", "/category/articles/africa/"],
						["Arts & Culture", "/category/articles/entertainment/"],
						["Business", "/category/articles/business/"],
						["Crime & Courts", "/category/articles/crime-and-courts/"],
						["Corona Virus", "/category/corona-virus-watch/"],
						["World Wide", "/category/articles/international/"]

						// DAILY NEWS
						// ["Home", "/"],
						// ["Africa", "/africa/"],
						// ["Arts & Culture", "/entertainment/"],
						// ["Business", "/business/"],
						// ["Technology", "/technology/"],
						// ["World Wide", "/world"]
					],
					"featured": {
						"showOnList": false,
						"showOnPost": false
					}
				}
			}
		},
		{
			"name": "@frontity/wp-source",
			"state": {
				"source": {
					"url": "https://www.herald.co.zw"
					// "url": "https://dailynews.co.zw/"
				}
			}
		},
		{
			"name": "@frontity/google-analytics",
			"state": {
				"googleAnalytics": {
					"trackingId": "UA-172122487-1",
				},
			},
		},
		"@frontity/tiny-router",
		"@frontity/html2react"
	]
};

export default settings;