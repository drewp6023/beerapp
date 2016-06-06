// var moment = require('moment');
// var _ = require('underscore');

var LeaflyRequest = {
	"page":0,  // --current page (REQUIRED)
	"take":10,  // --how many results to return (max of 50) (REQUIRED)
	"sort":["rating", "alpha", "newest", "popular"],  // --possible sort values: rating, alpha, newest, popular
	"search":"",  // --text to search for in strain name
	"filters":{
		"exclude":[ ], // --effects to exclude
		"flavors":["ammonia", "apple", "apricot", "berry", "bluecheese", "blueberry", "butter", "cheese", "chemical", "chestnut", "citrus", "coffee", "diesel", "earthy", "flowery", "grape", "grapefruit", "honey", "lavender", "lemon", "lime", "mango", "menthol", "mint", "minty", "nutty", "orange", "peach", "pear", "pepper", "pine", "pineapple", "plum", "pungent", "rose", "sage", "skunk", "spicyherbal", "strawberry", "sweet", "tar", "tea", "tobacco", "treefruit", "tropical", "vanilla", "violet", "woody"], // --flavors to search
		"category":["hybrid","indica","sativa"], // --hybrid,indica,sativa
		"conditions":["addadhd", "alzheimers", "anorexia", "anxiety", "arthritis", "asthma", "bipolardisorder", "cachexia", "cancer", "crohnsdisease", "epilepsy", "fibromyalgia", "gastrointestinaldisorder", "glaucoma", "hivaids", "hypertension", "migraines", "multiplesclerosis", "musculardystrophy", "parkinsons", "phantomlimbpain", "pms", "ptsd", "spinalcordinjury", "tinnitus", "tourettessyndrome"], // --conditions to search for
		"tags":["anxious", "aroused", "creative", "dizzy", "dryeyes", "drymouth", "energetic", "euphoric", "focused", "giggly", "happy", "hungry", "paranoid", "relaxed", "sleepy", "talkative", "tingly", "uplifted"],   // --general effect tags to search for
		"symptoms":["cramps", "depression", "eyepressure", "fatigue", "headaches", "inflammation", "insomnia", "lackofappetite", "musclespasms", "nausea", "pain", "seizures", "spasticity", "stress"] // --specific symptoms
	}
}

module.exports = LeaflyRequest;