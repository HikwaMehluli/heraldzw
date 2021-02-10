const settings = {
	"name": "thehearld",
	"state": {
		"frontity": {
			"url": "https://www.herald.co.zw/",
			"title": "The Herald",
			"description": "Zimbabwe's largest daily newspaper"
		}
	},
	"packages": [
		{
			"name": "@frontity/mars-theme",
			"state": {
				"theme": {
					"menu": [
						["Home", "/"],
						["Africa", "/category/articles/africa/"],
						["Arts & Culture", "/category/articles/entertainment/"],
						["Business", "/category/articles/business/"],
						["Crime & Courts", "/category/articles/crime-and-courts/"],
						["Corona Virus", "/category/corona-virus-watch/"],
						["World Wide", "/category/articles/international/"]
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
					"url": "https://www.herald.co.zw/"
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
