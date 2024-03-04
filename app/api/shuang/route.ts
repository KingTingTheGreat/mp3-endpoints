import { NextRequest } from "next/server";

const data = [
	{
		id: 1,
		title: "Setup Client Meeting",
		body: "Email John to setup three more client meeting for the project.",
		lane: 1,
	},
	{
		id: 2,
		title: "Complete Communicator Essay",
		body: "Conduct an user interview, and get some insight on misinformation.",
		lane: 2,
	},
	{
		id: 3,
		title: "Prepare Speech",
		body: "Prepare a speech with demostration, make sure it's 5 mins and longer.",
		lane: 3,
	},
	{
		id: 4,
		title: "Buy Coffee Beans",
		body: "Go to Broadsheet coffee, and buy a bag of coffee for Ian.",
		lane: 3,
	},
	{
		id: 5,
		title: "Remind students to prepare prototype",
		body: "Make sure students have Communication Branch ready for user test before Friday.",
		lane: 3,
	},
];

export async function GET(req: NextRequest) {
	return new Response(JSON.stringify(data));
}
