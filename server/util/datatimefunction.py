import pandas as pd
import numpy as np
from datetime import datetime, timedelta
# Read data from Excel file

df = pd.read_csv("Book2.csv")
# Suppose 'specific_column' is the name of the column you want to set as the index
df.set_index('Stream Name', inplace=True)
# Assuming you've set the index to the column containing the stream names
# For example, if the index is 'chemical_stream'
specific_stream_name = 'Flue Gas Out'  # Change this to the desired stream name

# Parameters for random number generation
max_deviation_percentage = 0.10  # 10% maximum deviation

# Get the list of index column values
streams = df.index.tolist()

# Define column names
columns = ['Stream Number', 'Stream Name', 'Temperature [C]', 'Pressure [kPaa]', 'Mass Flow [kg/h]', 'Molar Flow [kmol/h]', 'Vapor Volume Fraction', 'Time']

# Create an empty DataFrame with specified columns
data = pd.DataFrame(columns=columns)

for stream in streams:

    # Filter the DataFrame to the specific row where the index matches the desired stream name
    filtered_row = df.loc[specific_stream_name]

   # Generate timestamps starting from 6 months ago to today
    start_time = datetime.now() - timedelta(days=1)  # 6 months ago
    end_time = datetime.now()  # Current time

    # Adjust start_time to the beginning of the day
    start_time = datetime(start_time.year, start_time.month, start_time.day, 0, 0, 0)

    # Generate timestamps at 1-minute intervals from start_time to end_time
    timestamps = [start_time + timedelta(minutes=i) for i in range((end_time - start_time).days * 24 * 60)]

    # Iterate through each timestamp and generate random numbers for each property
    for timestamp in timestamps:

        print("generating... ")

        # Generate random multipliers with maximum deviation of 2%
        multipliers = np.random.uniform(1 - max_deviation_percentage, 1 + max_deviation_percentage, len(filtered_row))

        new_row = filtered_row * multipliers + filtered_row

        #time_filtered_row = pd.concat([filtered_row, pd.Series([timestamp])])

        data.loc[timestamp] = new_row

        # Assuming 'df' is your DataFrame
        data.loc[timestamp, 'Time'] = timestamp
        data.loc[timestamp, 'Stream Name'] = stream

        print("Added ", stream, timestamp)

        # Write the DataFrame to a CSV file with the name of the stream
        data.to_csv(f"data/{stream}.csv", index=False)



