import pandas as pd
import os

def append(path):
    frames = []
    for root, dirs, files in os.walk(path):
        for file in files:
            if file.endswith('.csv'):  # Check for CSV files
                file_with_path = os.path.join(root, file)
                try:
                    df = pd.read_csv(file_with_path)  # Read CSV file
                    frames.append(df)
                except Exception as e:
                    print(f"Error reading {file_with_path}: {e}. Skipping this file.")
    if frames:
        df = pd.concat(frames, axis=0)
        return df
    else:
        print("No valid CSV files found in the specified directory.")
        return None

input_directory = r"C:\Users\David\Desktop\capstone\data"
output_file = "merged_csv.csv"

df = append(input_directory)
if df is not None:
    df.to_csv(output_file, index=False)

import os

# Define the directory where you want to save the merged file
output_directory = r"C:\Users\David\Desktop\merged_files"

# Ensure that the output directory exists, create it if necessary
if not os.path.exists(output_directory):
    os.makedirs(output_directory)

# Define the name of the merged file
output_file = os.path.join(output_directory, "merged_csv.csv")

# Now, save the merged DataFrame to the specified output file
df.to_csv(output_file, index=False)

# Print the path where the file was saved
print("Merged file saved at:", output_file)
