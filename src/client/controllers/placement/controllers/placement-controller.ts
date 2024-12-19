import { Controller, OnInit, OnStart } from "@flamework/core";
import Keyboard from "client/controllers/controls/Keyboard";

@Controller({})
export class TowerController implements OnStart, OnInit {
	private Keyboard: Keyboard<[Enum.KeyCode, Enum.UserInputType]>;

	constructor() {
		this.Keyboard = new Keyboard([Enum.UserInputType.MouseButton1]);
	}

	onStart() {}
	onInit(): void | Promise<void> {
		this.Keyboard.KeyDown.Connect(this.onKeyDown);
	}

	private setUpCollisionForTower(tower: Model) {}

	private onKeyDown(keyCode: CastsToEnum<EnumItem>): void {
		switch (keyCode) {
			case Enum.UserInputType.MouseButton1:
				break;
			case Enum.UserInputType.MouseButton2:
				break;
			case Enum.KeyCode.R:
				break;
			default:
				throw `Unable to listen to invalid inputs: ${keyCode}`;
				break;
		}
	}
}
