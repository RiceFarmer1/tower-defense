import { Service, OnStart, OnInit } from "@flamework/core";

@Service({})
export class WaveService implements OnStart, OnInit {
    onInit(): void | Promise<void> {
        
    }
    onStart() {
        
    }

    getWaveProgress(): number {
        return math.huge
    }
}