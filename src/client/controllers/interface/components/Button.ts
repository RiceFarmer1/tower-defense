import Fusion, { ChildrenValue, Computed, New, OnEvent } from "@rbxts/fusion";
import { t } from "@rbxts/t";

const BUTTON_SIZE = UDim2.fromScale(0.5, 0.5);

interface ButtonProps {
	Name: string;
	Size?: UDim2;

	OnSelected: () => void;
}

export default function Button({ Name, Size, OnSelected }: ButtonProps): ChildrenValue {
	return New("Frame")({
		Name,
		Size: Computed(() => {
			return Size !== undefined && t.UDim2(Size) ? Size : BUTTON_SIZE;
		}),

		[OnEvent("InputBegan")]: (input) =>
			Computed(() => input.UserInputType === Enum.UserInputType.MouseButton1 && OnSelected),
	});
}
