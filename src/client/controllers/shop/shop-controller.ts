import { Controller, OnInit, OnStart } from "@flamework/core";
import { Value } from "@rbxts/fusion";

@Controller({})
export class ShopController implements OnStart, OnInit {
	onStart() {}

	onInit(): void | Promise<void> {
		const canOpenShop = Value(false);
	}
}
