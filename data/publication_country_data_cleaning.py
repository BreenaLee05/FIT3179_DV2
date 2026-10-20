import pandas as pd

# 1. Load your raw dataset
df = pd.read_csv('your_raw_dataset.csv')

# 2. Group by publication_country to count books and find top publisher
summary = df.groupby('publication_country').agg(
    book_count=('entry_id', 'count'),
    most_common_publisher=('publisher', lambda x: x.mode()[0] if not x.empty else 'Unknown')
).reset_index()

# 3. Coordinate Lookup Dictionary for countries
country_coords = {
    'United States': {'lat': 37.0902, 'lon': -95.7129},
    'United Kingdom': {'lat': 55.3781, 'lon': -3.4360},
    'France': {'lat': 46.2276, 'lon': 2.2137},
    'Germany': {'lat': 51.1657, 'lon': 10.4515},
    'Australia': {'lat': -25.2744, 'lon': 133.7751},
    'Brazil': {'lat': -14.2350, 'lon': -51.9253},
    'Italy': {'lat': 41.8719, 'lon': 12.5674},
    'Switzerland': {'lat': 46.8182, 'lon': 8.2275}
}

# 4. Map coordinates to the summary dataframe
summary['latitude'] = summary['publication_country'].map(lambda c: country_coords.get(c, {}).get('lat'))
summary['longitude'] = summary['publication_country'].map(lambda c: country_coords.get(c, {}).get('lon'))

# 5. Save the processed summary CSV
summary.to_csv('data/publication_country_summary.csv', index=False)
print("Summary CSV successfully created!")