import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"

import schemas from "./sanity/schemas"

const config = defineConfig({
	projectId: "kzw3qm4y",
	dataset: "production",
	title: "My 2023 Portfolio",
	apiVersion: "2023-03-04",
	basePath: "/admin",
	plugins: [deskTool(), visionTool()],
	schema: { types: schemas },
})

export default config
