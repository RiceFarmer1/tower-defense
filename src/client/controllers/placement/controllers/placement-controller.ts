import { Controller, OnInit, OnStart } from "@flamework/core";
import Keyboard from "client/controllers/controls/Keyboard";

@Controller({})
export class TowerController implements OnStart, OnInit {
	private Keyboard: Keyboard<[Enum.KeyCode, Enum.UserInputType]>;

	public prefab: Model | undefined;

	private SMOOTHNESS = 0.6;

	constructor() {
		this.Keyboard = new Keyboard([Enum.UserInputType.MouseButton1]);
	}

	public onStart() {}
	public onInit(): void | Promise<void> {
		this.Keyboard.KeyDown.Connect((keyCode) => {
			if (!this.prefab) return;

			if (keyCode === Enum.UserInputType.MouseButton2) {
			} else if (keyCode === Enum.KeyCode.R) {
			}
		});
	}

	protected setRotation(rot: CFrame) {
		this.getCFrame().Lerp((this.prefab as Model).GetPivot().mul(rot), this.SMOOTHNESS);
	}

	protected setCFrame(cf: CFrame) {
		this.getCFrame().Lerp(cf, this.SMOOTHNESS);
	}

	protected getCFrame(): CFrame {
		return (this.prefab as Model).GetPivot();
	}
}
