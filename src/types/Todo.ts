export type Todo = {
	id: number;
	title: string;
	body: string;
	userId: number;
};

export type Todos = Omit<Todo, 'body'>[];
