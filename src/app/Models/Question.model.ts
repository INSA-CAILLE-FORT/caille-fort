class List<T> {
}

export class Question {
    id: number;
    text: string;
    status: string;
    answers: List<string>;

    constructor(id: number,
                text: string,
                status: string,
                answers: List<string>
    ) {
        this.id = id;
        this.text = text;
        this.status = status;
        this.answers = answers;
    }
}
