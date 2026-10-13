# Run Command
# /opt/anaconda3/bin/python3 "/Users/breena/Library/Mobile Documents/com~apple~CloudDocs/Mac Sync/Bachelor of Computer Science/Academics/Y3S1/FIT3179/Assignments/DV 2/34475699_BreenaLee_DV2/FIT3179-DV2/data/data_cleaning.py"


# Reference: Used ChatGPT to derive the dataset to calculate the number of entries grouped by nationality
import pandas as pd

# 1. Load your raw dataset
df = pd.read_csv("data/international_bestsellers.csv")
total_entries = len(df)

# 2. Group by nationality and calculate required metrics
summary = []
for nationality, group in df.groupby("nationality"):
  entry_count = len(group)
  share_percent = (entry_count / total_entries) * 100
  best_row = group.loc[group["rank"].idxmin()]  # Find the row with the best (lowest) rank

  summary.append({
      "nationality": nationality,
      "entryCount": entry_count,
      "sharePercent": share_percent,
      "topRankedBook": best_row["title"],
      "bestRank": best_row["rank"],
  })

summary_df = pd.DataFrame(summary)

# 3. Save to a new CSV file
summary_df.to_csv("author_nationality_summary.csv", index=False)
print("Summary CSV created successfully!")