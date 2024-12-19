import { Children, New } from "@rbxts/fusion";

export default function Hotbars() {
	return New("Frame")({
		Name: "hotbar",
		AnchorPoint: new Vector2(0.5, 1),
		BackgroundColor3: Color3.fromRGB(85, 170, 127),
		BackgroundTransparency: 1,
		BorderColor3: Color3.fromRGB(0, 0, 0),
		BorderSizePixel: 0,
		LayoutOrder: 1,
		Position: UDim2.fromScale(0.5, 0.971),
		Size: UDim2.fromScale(0.251, 0.102),

		[Children]: [
			New("UIListLayout")({
				Name: "UIListLayout",
				Padding: new UDim(0.04, 0),
				FillDirection: Enum.FillDirection.Horizontal,
				HorizontalAlignment: Enum.HorizontalAlignment.Center,
				SortOrder: Enum.SortOrder.LayoutOrder,
				VerticalAlignment: Enum.VerticalAlignment.Bottom,
			}),

			New("Frame")({
				Name: "1",
				AnchorPoint: new Vector2(0.5, 0.5),
				BackgroundColor3: Color3.fromRGB(0, 0, 0),
				BackgroundTransparency: 0.5,
				BorderColor3: Color3.fromRGB(0, 0, 0),
				BorderSizePixel: 0,
				LayoutOrder: 1,
				Position: UDim2.fromScale(0.355, -1.71),
				Size: UDim2.fromScale(0.143, 0.702),

				[Children]: [
					New("UICorner")({
						Name: "UICorner",
						CornerRadius: new UDim(0.07, 0),
					}),
				],
			}),

			New("Frame")({
				Name: "2",
				AnchorPoint: new Vector2(0.5, 0.5),
				BackgroundColor3: Color3.fromRGB(0, 0, 0),
				BackgroundTransparency: 0.5,
				BorderColor3: Color3.fromRGB(0, 0, 0),
				BorderSizePixel: 0,
				LayoutOrder: 2,
				Position: UDim2.fromScale(0.355, -1.71),
				Size: UDim2.fromScale(0.143, 0.702),

				[Children]: [
					New("UICorner")({
						Name: "UICorner",
						CornerRadius: new UDim(0.07, 0),
					}),
				],
			}),

			New("Frame")({
				Name: "4",
				AnchorPoint: new Vector2(0.5, 0.5),
				BackgroundColor3: Color3.fromRGB(0, 0, 0),
				BackgroundTransparency: 0.5,
				BorderColor3: Color3.fromRGB(0, 0, 0),
				BorderSizePixel: 0,
				LayoutOrder: 4,
				Position: UDim2.fromScale(0.355, -1.71),
				Size: UDim2.fromScale(0.143, 0.702),

				[Children]: [
					New("UICorner")({
						Name: "UICorner",
						CornerRadius: new UDim(0.07, 0),
					}),
				],
			}),

			New("Frame")({
				Name: "3",
				AnchorPoint: new Vector2(0.5, 0.5),
				BackgroundColor3: Color3.fromRGB(0, 0, 0),
				BackgroundTransparency: 0.5,
				BorderColor3: Color3.fromRGB(0, 0, 0),
				BorderSizePixel: 0,
				LayoutOrder: 3,
				Position: UDim2.fromScale(0.355, -1.71),
				Size: UDim2.fromScale(0.143, 0.702),

				[Children]: [
					New("UICorner")({
						Name: "UICorner",
						CornerRadius: new UDim(0.07, 0),
					}),
				],
			}),

			New("Frame")({
				Name: "5",
				AnchorPoint: new Vector2(0.5, 0.5),
				BackgroundColor3: Color3.fromRGB(0, 0, 0),
				BackgroundTransparency: 0.5,
				BorderColor3: Color3.fromRGB(0, 0, 0),
				BorderSizePixel: 0,
				LayoutOrder: 5,
				Position: UDim2.fromScale(0.355, -1.71),
				Size: UDim2.fromScale(0.143, 0.702),

				[Children]: [
					New("UICorner")({
						Name: "UICorner",
						CornerRadius: new UDim(0.07, 0),
					}),
				],
			}),

			New("Frame")({
				Name: "6",
				AnchorPoint: new Vector2(0.5, 0.5),
				BackgroundColor3: Color3.fromRGB(0, 0, 0),
				BackgroundTransparency: 0.5,
				BorderColor3: Color3.fromRGB(0, 0, 0),
				BorderSizePixel: 0,
				LayoutOrder: 5,
				Position: UDim2.fromScale(0.355, -1.71),
				Size: UDim2.fromScale(0.143, 0.702),

				[Children]: [
					New("UICorner")({
						Name: "UICorner",
						CornerRadius: new UDim(0.07, 0),
					}),
				],
			}),

			New("Frame")({
				Name: "Ability",
				AnchorPoint: new Vector2(0.5, 1),
				BackgroundColor3: Color3.fromRGB(0, 0, 0),
				BackgroundTransparency: 1,
				BorderColor3: Color3.fromRGB(0, 0, 0),
				BorderSizePixel: 0,
				Position: UDim2.fromScale(-0.0501, 1),
				Size: UDim2.fromScale(0.172, 2.47),
				Visible: false,

				[Children]: [
					New("UICorner")({
						Name: "UICorner",
						CornerRadius: new UDim(0.07, 0),
					}),

					New("UIListLayout")({
						Name: "UIListLayout",
						Padding: new UDim(0.04, 0),
						HorizontalAlignment: Enum.HorizontalAlignment.Center,
						SortOrder: Enum.SortOrder.LayoutOrder,
						VerticalAlignment: Enum.VerticalAlignment.Bottom,
					}),
				],
			}),

			New("UIAspectRatioConstraint")({
				Name: "UIAspectRatioConstraint",
				AspectRatio: 4.9,
			}),
		],
	});
}
