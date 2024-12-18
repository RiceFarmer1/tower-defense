import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { t } from "@rbxts/t";

@Component({
	attributes: {
		health: t.numberConstrained(100, 100),
		shield: t.numberConstrained(100, 100),
	},
})
export class Base extends BaseComponent<{}> implements OnStart {
	constructor() {
		super();
	}

	onStart() {}
}
