import { Controller, OnInit, OnStart } from "@flamework/core";
import Hotbars from "../interface/components/Hotbar";
import { Players } from "@rbxts/services";

@Controller({})
export class HotbarsController implements OnStart, OnInit {
    public onStart() {
        
    }

    public onInit(): void | Promise<void> {
        warn('ran')
        const hotbarUI = Hotbars()
        hotbarUI.Parent = Players.LocalPlayer.WaitForChild("PlayerGui")
    }
}