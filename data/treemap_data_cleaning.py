import pandas as pd

# 1. Load your raw dataset
df = pd.read_csv('data/google_books_dataset.csv')

# 2. Clean categories and ensure numeric ratings
df['categories'] = df['categories'].fillna('Uncategorized').str.strip()
df['ratings_count'] = pd.to_numeric(df['ratings_count'], errors='coerce').fillna(0)

# 3. Aggregate total reviews per genre
treemap_df = df.groupby('categories').agg(
    total_reviews=('ratings_count', 'sum'),
    book_count=('book_id', 'count')
).reset_index()

# 4. Filter for top categories or keep all
treemap_df = treemap_df.sort_values(by='total_reviews', ascending=False)

# 5. Save as a clean summary CSV
treemap_df.to_csv('data/genre_treemap_summary.csv', index=False)
print("Summary CSV created successfully!")