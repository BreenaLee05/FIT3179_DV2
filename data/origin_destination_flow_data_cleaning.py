import pandas as pd

# Read your original dataset
df = pd.read_csv("data/international_bestsellers.csv")

# Count books for each nationality-publication country pair
flows = (
    df.dropna(subset=["nationality", "publication_country"])
      .groupby(["nationality", "publication_country"])
      .size()
      .reset_index(name="books")
)

flows.columns = ["origin", "destination", "books"]

# Read the country coordinate dataset
countries = pd.read_csv("data/countries.csv")

print("Coordinate CSV columns:", countries.columns.tolist())

# Keep the country name and coordinates
# This dataset uses COUNTRY, longitude and latitude
coordinates = countries[
    ["COUNTRY", "longitude", "latitude"]
].copy()

coordinates = coordinates.rename(columns={
    "COUNTRY": "country",
    "longitude": "lon",
    "latitude": "lat"
})

# Remove duplicate country names
coordinates = coordinates.drop_duplicates(subset=["country"])

# Match nationality to origin coordinates
flows = flows.merge(
    coordinates.rename(columns={
        "country": "origin",
        "lon": "origin_lon",
        "lat": "origin_lat"
    }),
    on="origin",
    how="left"
)

# Match publication country to destination coordinates
flows = flows.merge(
    coordinates.rename(columns={
        "country": "destination",
        "lon": "destination_lon",
        "lat": "destination_lat"
    }),
    on="destination",
    how="left"
)

# Report unmatched country names
missing_origins = flows.loc[
    flows["origin_lon"].isna(), "origin"
].unique()

missing_destinations = flows.loc[
    flows["destination_lon"].isna(), "destination"
].unique()

print("Unmatched nationalities:", missing_origins)
print("Unmatched publication countries:", missing_destinations)

# Keep only flows with valid coordinates
flows = flows.dropna(subset=[
    "origin_lon", "origin_lat",
    "destination_lon", "destination_lat"
])

# Exclude domestic flows because they do not show cross-country movement
flows = flows[flows["origin"] != flows["destination"]]

# Save the final file
flows.to_csv(
    "data/nationality_publication_flows.csv",
    index=False
)

print("Created nationality_publication_flows.csv")
print(flows.head())
