import { BaseComponent } from "@flamework/components";
import { OnInit, OnStart } from "@flamework/core";

interface TowerInstance extends Instance {}
interface TowerAttributes {}

export default abstract class Tower<A extends TowerAttributes, I extends TowerInstance>
	extends BaseComponent<A, I>
	implements OnStart, OnInit
{
	onInit(): void | Promise<void> {}
	onStart(): void {}
}
