export const ADD_TAG = "ADD_TAG";

const initState = {
	tags: ["Business", "Tech", "Greek Life", "Computer Science", "Music", "Parties", "Dance", "Sports", "Politics", "International", "Community Service"]
};

export function tags(state = initState, action)
{
	switch (action.type)
	{
		case ADD_TAG:
			if (state.tags.includes(action.tag))
				return state;
			state.tags.push(action.tag);
			return state;
			case
		default:
			return state;
	}
}