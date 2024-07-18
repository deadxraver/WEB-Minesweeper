class Field {

	constructor(sizeX, sizeY, numberOfMines) {
		this._field = Cell[sizeY][sizeX];
		this._sizeX = sizeX;
		this._sizeY = sizeY;
		this._numberOfMines = numberOfMines;
	}

	get sizeX() {
		return this._sizeX;
	}

	set sizeX(value) {
		this._sizeX = value;
	}

	get sizeY() {
		return this._sizeY;
	}

	set sizeY(value) {
		this._sizeY = value;
	}

	get numberOfMines() {
		return this._numberOfMines;
	}

	set numberOfMines(value) {
		this._numberOfMines = value;
	}

	get field() {
		return this._field;
	}

	set field(value) {
		this._field = value;
	}
}