# Product data

## products.json

All product information is driven by `products.json`. Edit this file to add or change products—no code changes needed.

### Fields per product

| Field | Description |
|-------|-------------|
| `id` | Unique ID (used in URLs, e.g. `/products/1`) |
| `title` | Display name |
| `description` | Short description (listing and detail) |
| `category` | `vanilla-cakes` \| `chocolate-cakes` \| `cookies` \| `brownie` |
| `price` | Price in Rs. (number) |
| `image` | **Filename only** (e.g. `basic-vanilla.jpg`). Must match a file in `public/cake products/` (cakes) or `public/cookies products/` (cookies & brownie). |
| `images` | Array of image filenames (same folder rules as `image`) |
| `sizeServing` | e.g. `["1 pound", "2 pound"]` for cakes, `["Per piece"]` for cookies/brownie |
| `tabDescription` | Full description (product detail tab) |
| `tabIngredients` | Ingredients and allergy advice |
| `tabNutritional` | Nutritional information text |
| `reviews` | Array of `{ "author": "...", "text": "...", "rating": 5 }` |

### Image filenames

- **Cakes** (vanilla-cakes, chocolate-cakes): put images in `public/cake products/`. Set `image` (and `images`) to the exact filename, e.g. `basic-vanilla.jpg`, `chocolate-fudge.jpg`.
- **Cookies & brownie**: put images in `public/cookies products/`. Set `image` to the filename in that folder.

Name your files to match the `image` value in the JSON, or change the `image` value to match your file names.
