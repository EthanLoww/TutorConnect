export const levels: { [key: string]: string[] } = {
	"Primary": [
		"Primary 1",
		"Primary 2",
		"Primary 3",
		"Primary 4",
		"Primary 5",
		"Primary 6",
	],
	"Lower Secondary": [
		"Sec 1 Express",
		"Sec 1 NA",
		"Sec 1 NT",
		"Sec 1 IP",
		"Sec 2 Express",
		"Sec 2 NA",
		"Sec 2 NT",
		"Sec 2 IP",
	],
	"Upper Secondary": [
		"Sec 3 Express",
		"Sec 3 NA",
		"Sec 3 NT",
		"Sec 3 IP",
		"Sec 4 Express",
		"Sec 4 NA",
		"Sec 4 NT",
		"Sec 4 IP",
		"Sec 5 NA",
		"Sec 5 NT",
	],
	"Junior College": ["JC1", "JC2"],
	"Pre-School": [
		"Nursery 1",
		"Nursery 2",
		"Kindergarten 1",
		"Kindergarten 2",
	],
	"IGCSE": [
		"IGCSE Year 1",
		"IGCSE Year 2",
		"IGCSE Year 3",
		"IGCSE Year 4",
		"IGCSE Year 5",
		"IGCSE Year 6",
		"IGCSE Year 7",
		"IGCSE Year 8",
		"IGCSE Year 9",
		"IGCSE Year 10",
	],
	"IB Diploma": ["IB Year 1", "IB Year 2"],
	"Poly/University": ["Poly", "University"],
	"Others": ["Others"],
};

export const levelToCategory: { [key: string]: string } = {
	"Primary 1": "Primary School",
	"Primary 2": "Primary School",
	"Primary 3": "Primary School",
	"Primary 4": "Primary School",
	"Primary 5": "Primary School",
	"Primary 6": "Primary School",
	"Sec 1 Express": "Secondary School",
	"Sec 1 NA": "Secondary School",
	"Sec 1 NT": "Secondary School",
	"Sec 1 IP": "Secondary School",
	"Sec 2 Express": "Secondary School",
	"Sec 2 NA": "Secondary School",
	"Sec 2 NT": "Secondary School",
	"Sec 2 IP": "Secondary School",
	"Sec 3 Express": "Secondary School",
	"Sec 3 NA": "Secondary School",
	"Sec 3 NT": "Secondary School",
	"Sec 3 IP": "Secondary School",
	"Sec 4 Express": "Secondary School",
	"Sec 4 NA": "Secondary School",
	"Sec 4 NT": "Secondary School",
	"Sec 4 IP": "Secondary School",
	"Sec 5 NA": "Secondary School",
	"Sec 5 NT": "Secondary School",
	"JC1": "Junior College",
	"JC2": "Junior College",
	"Nursery 1": "Pre-School",
	"Nursery 2": "Pre-School",
	"Kindergarten 1": "Pre-School",
	"Kindergarten 2": "Pre-School",
	"IGCSE Year 1": "IB/IGCSE",
	"IGCSE Year 2": "IB/IGCSE",
	"IGCSE Year 3": "IB/IGCSE",
	"IGCSE Year 4": "IB/IGCSE",
	"IGCSE Year 5": "IB/IGCSE",
	"IGCSE Year 6": "IB/IGCSE",
	"IGCSE Year 7": "IB/IGCSE",
	"IGCSE Year 8": "IB/IGCSE",
	"IGCSE Year 9": "IB/IGCSE",
	"IGCSE Year 10": "IB/IGCSE",
	"IB Year 1": "IB/IGCSE",
	"IB Year 2": "IB/IGCSE",
	"Poly": "Diploma/Degree",
	"University": "Diploma/Degree",
}

export const subjectsByLevel: Record<string, string[]> = {
	"Primary 1": [
		"English",
		"Math",
		"Science",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higher Tamil",
		"Hindi",
	],
	"Primary 2": [
		"English",
		"Math",
		"Science",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higher Tamil",
		"Hindi",
	],
	"Primary 3": [
		"English",
		"Math",
		"Science",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higher Tamil",
		"Hindi",
	],
	"Primary 4": [
		"English",
		"Math",
		"Science",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higher Tamil",
		"Hindi",
	],
	"Primary 5": [
		"English",
		"Math",
		"Science",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higher Tamil",
		"Hindi",
	],
	"Primary 6": [
		"English",
		"Math",
		"Science",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higher Tamil",
		"Hindi",
	],
	"Sec 1 Express": [
		"English",
		"Math",
		"Science",
		"Physics",
		"Chemistry",
		"Biology",
		"Geography",
		"History",
		"Literature",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
	],
	"Sec 1 NA": [
		"English",
		"Math",
		"Science",
		"Physics",
		"Chemistry",
		"Biology",
		"Geography",
		"History",
		"Literature",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
	],
	"Sec 1 NT": [
		"English",
		"Math",
		"Science",
		"Physics",
		"Chemistry",
		"Biology",
		"Geography",
		"History",
		"Literature",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
	],
	"Sec 1 IP": [
		"English",
		"Math",
		"Science",
		"Physics",
		"Chemistry",
		"Biology",
		"Geography",
		"History",
		"Literature",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
	],
	"Sec 2 Express": [
		"English",
		"Math",
		"Science",
		"Physics",
		"Chemistry",
		"Biology",
		"Geography",
		"History",
		"Literature",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
	],
	"Sec 2 NA": [
		"English",
		"Math",
		"Science",
		"Physics",
		"Chemistry",
		"Biology",
		"Geography",
		"History",
		"Literature",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
	],
	"Sec 2 NT": [
		"English",
		"Math",
		"Science",
		"Physics",
		"Chemistry",
		"Biology",
		"Geography",
		"History",
		"Literature",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
	],
	"Sec 2 IP": [
		"English",
		"Math",
		"Science",
		"Physics",
		"Chemistry",
		"Biology",
		"Geography",
		"History",
		"Literature",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
	],
	"Sec 3 Express": [
		"English",
		"A Math",
		"E Math",
		"Physics",
		"Chemistry",
		"Biology",
		"Combined Science (Physics only)",
		"Combined Science (Chemistry only)",
		"Combined Science (Biology only)",
		"Combined Science (Physics/Chemistry)",
		"Combined Science (Biology/Chemistry)",
		"Combined Science (Biology/Physics)",
		"Geography",
		"History",
		"Literature",
		"Principle of Accounting (POA)",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
		"Music",
		"Art",
	],
	"Sec 3 NA": [
		"English",
		"A Math",
		"E Math",
		"Physics",
		"Chemistry",
		"Biology",
		"Combined Science (Physics only)",
		"Combined Science (Chemistry only)",
		"Combined Science (Biology only)",
		"Combined Science (Physics/Chemistry)",
		"Combined Science (Biology/Chemistry)",
		"Combined Science (Biology/Physics)",
		"Geography",
		"History",
		"Literature",
		"Principle of Accounting (POA)",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
		"Music",
		"Art",
	],
	"Sec 3 NT": [
		"English",
		"A Math",
		"E Math",
		"Physics",
		"Chemistry",
		"Biology",
		"Combined Science (Physics only)",
		"Combined Science (Chemistry only)",
		"Combined Science (Biology only)",
		"Combined Science (Physics/Chemistry)",
		"Combined Science (Biology/Chemistry)",
		"Combined Science (Biology/Physics)",
		"Geography",
		"History",
		"Literature",
		"Principle of Accounting (POA)",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
		"Music",
		"Art",
	],
	"Sec 3 IP": [
		"English",
		"A Math",
		"E Math",
		"Physics",
		"Chemistry",
		"Biology",
		"Combined Science (Physics only)",
		"Combined Science (Chemistry only)",
		"Combined Science (Biology only)",
		"Combined Science (Physics/Chemistry)",
		"Combined Science (Biology/Chemistry)",
		"Combined Science (Biology/Physics)",
		"Geography",
		"History",
		"Literature",
		"Principle of Accounting (POA)",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
		"Music",
		"Art",
	],
	"Sec 4 Express": [
		"English",
		"A Math",
		"E Math",
		"Physics",
		"Chemistry",
		"Biology",
		"Combined Science (Physics only)",
		"Combined Science (Chemistry only)",
		"Combined Science (Biology only)",
		"Combined Science (Physics/Chemistry)",
		"Combined Science (Biology/Chemistry)",
		"Combined Science (Biology/Physics)",
		"Geography",
		"History",
		"Literature",
		"Principle of Accounting (POA)",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
		"Music",
		"Art",
	],
	"Sec 4 NA": [
		"English",
		"A Math",
		"E Math",
		"Physics",
		"Chemistry",
		"Biology",
		"Combined Science (Physics only)",
		"Combined Science (Chemistry only)",
		"Combined Science (Biology only)",
		"Combined Science (Physics/Chemistry)",
		"Combined Science (Biology/Chemistry)",
		"Combined Science (Biology/Physics)",
		"Geography",
		"History",
		"Literature",
		"Principle of Accounting (POA)",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
		"Music",
		"Art",
	],
	"Sec 4 NT": [
		"English",
		"A Math",
		"E Math",
		"Physics",
		"Chemistry",
		"Biology",
		"Combined Science (Physics only)",
		"Combined Science (Chemistry only)",
		"Combined Science (Biology only)",
		"Combined Science (Physics/Chemistry)",
		"Combined Science (Biology/Chemistry)",
		"Combined Science (Biology/Physics)",
		"Geography",
		"History",
		"Literature",
		"Principle of Accounting (POA)",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
		"Music",
		"Art",
	],
	"Sec 4 IP": [
		"English",
		"A Math",
		"E Math",
		"Physics",
		"Chemistry",
		"Biology",
		"Combined Science (Physics only)",
		"Combined Science (Chemistry only)",
		"Combined Science (Biology only)",
		"Combined Science (Physics/Chemistry)",
		"Combined Science (Biology/Chemistry)",
		"Combined Science (Biology/Physics)",
		"Geography",
		"History",
		"Literature",
		"Principle of Accounting (POA)",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
		"Music",
		"Art",
	],
	"Sec 5 NA": [
		"English",
		"A Math",
		"E Math",
		"Physics",
		"Chemistry",
		"Biology",
		"Combined Science (Physics only)",
		"Combined Science (Chemistry only)",
		"Combined Science (Biology only)",
		"Combined Science (Physics/Chemistry)",
		"Combined Science (Biology/Chemistry)",
		"Combined Science (Biology/Physics)",
		"Geography",
		"History",
		"Literature",
		"Principle of Accounting (POA)",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
		"Music",
		"Art",
	],
	"Sec 5 NT": [
		"English",
		"A Math",
		"E Math",
		"Physics",
		"Chemistry",
		"Biology",
		"Combined Science (Physics only)",
		"Combined Science (Chemistry only)",
		"Combined Science (Biology only)",
		"Combined Science (Physics/Chemistry)",
		"Combined Science (Biology/Chemistry)",
		"Combined Science (Biology/Physics)",
		"Geography",
		"History",
		"Literature",
		"Principle of Accounting (POA)",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
		"Music",
		"Art",
	],
	JC1: [
		"H1 General Paper",
		"H1 Math",
		"H2 Math",
		"H2 Further Math",
		"H1 Biology",
		"H2 Biology",
		"H1 Chemistry",
		"H2 Chemistry",
		"H1 Physics",
		"H2 Physics",
		"H1 Computing",
		"H2 Computing",
		"H1 Economics",
		"H2 Economics",
		"H1 History",
		"H2 History",
		"H1 Geography",
		"H2 Geography",
		"H1 Literature",
		"H2 Literature",
		"H2 Chinese Language and Literature",
		"H3 Math",
		"H3 Biology",
		"H3 Chemistry",
		"H3 Physics",
		"H3 Economics",
		"H3 History",
		"H3 Geography",
		"H3 Literature",
		"H2 Knowledge & Inquiry",
		"H1 Chinese",
		"H1 Malay",
		"H1 Tamil",
	],
	JC2: [
		"H1 General Paper",
		"H1 Math",
		"H2 Math",
		"H2 Further Math",
		"H1 Biology",
		"H2 Biology",
		"H1 Chemistry",
		"H2 Chemistry",
		"H1 Physics",
		"H2 Physics",
		"H1 Computing",
		"H2 Computing",
		"H1 Economics",
		"H2 Economics",
		"H1 History",
		"H2 History",
		"H1 Geography",
		"H2 Geography",
		"H1 Literature",
		"H2 Literature",
		"H2 Chinese Language and Literature",
		"H3 Math",
		"H3 Biology",
		"H3 Chemistry",
		"H3 Physics",
		"H3 Economics",
		"H3 History",
		"H3 Geography",
		"H3 Literature",
		"H2 Knowledge & Inquiry",
		"H1 Chinese",
		"H1 Malay",
		"H1 Tamil",
	],
	"Nursery 1": [
		"English",
		" Math",
		"Chinese",
		"Malay",
		"Tamil",
		"Phonics",
		"Creative Writing",
	],
	"Nursery 2": [
		"English",
		" Math",
		"Chinese",
		"Malay",
		"Tamil",
		"Phonics",
		"Creative Writing",
	],
	"Kindergarten 1": [
		"English",
		" Math",
		"Chinese",
		"Malay",
		"Tamil",
		"Phonics",
		"Creative Writing",
	],
	"Kindergarten 2": [
		"English",
		" Math",
		"Chinese",
		"Malay",
		"Tamil",
		"Phonics",
		"Creative Writing",
	],
	"IGCSE Year 1": ["Math", "English", "Science", "History"],
	"IGCSE Year 2": ["Math", "English", "Science", "History"],
	"IGCSE Year 3": ["Math", "English", "Science", "History"],
	"IGCSE Year 4": ["Math", "English", "Science", "History"],
	"IGCSE Year 5": ["Math", "English", "Science", "History"],
	"IGCSE Year 6": ["Math", "English", "Science", "History"],
	"IGCSE Year 7": ["Math", "English", "Science", "History"],
	"IGCSE Year 8": ["Math", "English", "Science", "History"],
	"IGCSE Year 9": ["Math", "English", "Science", "History"],
	"IGCSE Year 10": ["Math", "English", "Science", "History"],
	"IB Year 1": [
		"HL Language A: Literature",
		"HL Language A: Language and Literature",
		"SL Language B: Chinese",
		"SL Language B: French",
		"SL Language B: Spanish",
		"SL Language B: Japanese",
		"SL Business Management",
		"SL Economics",
		"HL Economics",
		"SL Geography",
		"HL Geography",
		"SL History",
		"HL History",
		"SL Psychology",
		"HL Psychology",
		"SL Global Politics",
		"HL Global Politics",
		"SL Biology",
		"HL Biology",
		"SL Chemistry",
		"HL Chemistry",
		"SL Physics",
		"HL Physics",
		"SL Environmental Systems and Societies",
		"SL Math",
		"HL Math",
		"SL Further Math",
		"HL Further Math",
		"SL Visual Arts",
		"HL Visual Arts",
		"SL Music",
		"HL Music",
		"SL Theatre",
		"HL Theatre",
		"SL Computer Science",
		"HL Computer Science",
		"SL Design Technology",
		"HL Design Technology",
	],
	"IB Year 2": [
		"HL Language A: Literature",
		"HL Language A: Language and Literature",
		"SL Language B: Chinese",
		"SL Language B: French",
		"SL Language B: Spanish",
		"SL Language B: Japanese",
		"SL Business Management",
		"SL Economics",
		"HL Economics",
		"SL Geography",
		"HL Geography",
		"SL History",
		"HL History",
		"SL Psychology",
		"HL Psychology",
		"SL Global Politics",
		"HL Global Politics",
		"SL Biology",
		"HL Biology",
		"SL Chemistry",
		"HL Chemistry",
		"SL Physics",
		"HL Physics",
		"SL Environmental Systems and Societies",
		"SL Math",
		"HL Math",
		"SL Further Math",
		"HL Further Math",
		"SL Visual Arts",
		"HL Visual Arts",
		"SL Music",
		"HL Music",
		"SL Theatre",
		"HL Theatre",
		"SL Computer Science",
		"HL Computer Science",
		"SL Design Technology",
		"HL Design Technology",
	],
	Poly: ["Business", "Engineering", "Design"],
	University: ["Business", "Engineering", "Design"],
	Others: ["Miscellaneous"],
};

export const subjectsByCategory: Record<string, string[]> = {
	"Pre-School": [
		"English",
		"Math",
		"Chinese",
		"Tamil",
		"Malay",
		"Phonics",
		"Creative Writing",
	],

	"Primary School": [
		"English",
		"Math",
		"Science",
		"Chinese",
		"Higher Chinese",
		"Tamil",
		"Higher Tamil",
		"Malay",
		"Higher Malay",
		"Hindi",
		"Art",
		"Creative Writing",
		"GEP",
		"Math Olympiad",
		"Science Olympiad",
	],

	"Secondary School": [
		"English",
		"L. Sec Math",
		"L. Sec Science",
		"A Math",
		"E Math",
		"Physics",
		"Chemistry",
		"Biology",
		"Physics/Chemistry",
		"Biology/Chemistry",
		"Biology/Physics",
		"Geography",
		"History",
		"Literature",
		"Principle of Accounting (POA)",
		"Social Studies",
		"Chinese",
		"Higher Chinese",
		"Malay",
		"Higher Malay",
		"Tamil",
		"Higer Tamil",
		"Hindi",
		"Music",
		"Art",
		"Design and Technology",
		"Food and Nutrition",
	],

	"Junior College": [
		"General Paper",
		"Math",
		"Chemistry",
		"Physics",
		"Biology",
		"Computing",
		"Economics",
		"History",
		"Geography",
		"Literature",
		"Chinese",
		"Chinese Studies",
		"Malay",
		"Malay Studies",
		"Tamil",
		"Tamil Studies",
		"Knowledge & Inquiry",
		"Art",
		"H3 Math",
		"H3 Physics",
		"H3 Chemistry",
		"H3 Biology",
		"H3 Economics",
		"H3 History",
		"H3 Geography",
		"H3 English Literature",
		"H3 Chinese Language & Literature",
		"H3 Art",
	],

	"IB/IGCSE": [
		"English",
		"English Literature",
		"Chinese",
		"Malay",
		"Tamil",
		"Business Management",
		"Economics",
		"Geography",
		"History",
		"Biology",
		"Chemistry",
		"Physics",
		"Computer Science",
		"Math",
		"Art",
	],

	"Diploma/Degree": [
		"Business Admin",
		"Accounting",
		"Finance",
		"Marketing",
		"Human Resource",
		"Mass Communication",
		"Engineering",
		"Computer Science",
		"Information Technology",
		"Law",
		"Psychology",
		"Math",
		"Applied Math",
		"Statistics",
		"Physics",
		"Chemistry",
		"Biology",
		"Geography",
		"History",
		"Literature",
		"Economics",
		"Architecture",
		"Real Estate",
		"Sociology",
		"Medicine",
		"Biological Science",
		"Chemical Engineering",
		"Electrical Engineering",
		"Mechanical Engineering",
		"Life Science",
		"Communication Studies",
	],
};