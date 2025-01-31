# Solutions Considered

## Approach 1: Full File Read
- **Description**: Load the entire log file into memory and filter entries matching the target date.
- **Pros**:
  - Simple to implement.
- **Cons**:
  - Not scalable for large files (~1TB).
  - High memory usage, potential crashes.

## Approach 2: Line-by-Line Processing (Streaming)
- **Description**: Read the file line by line using streaming and extract relevant log entries.
- **Pros**:
  - Memory-efficient.
  - Scalable for large files.
- **Cons**:
  - Slightly more complex implementation.

## Approach 3: Indexing and Preprocessing
- **Description**: Preprocess logs into indexed chunks for faster retrieval.
- **Pros**:
  - Extremely fast lookups.
- **Cons**:
  - Requires pre-processing step.
  - Additional storage overhead.

# Final Solution Summary
We chose **line-by-line processing (streaming)** because:
- It efficiently handles large files without consuming excessive memory.
- It is scalable and does not require additional preprocessing.
- It maintains simplicity while ensuring performance.

# Steps to Run

1. **Run the script**
   ```sh
   node extractLogs.js <log_file_path> <YYYY-MM-DD>
   ```
   Example:
   ```sh
   node extractLogs.js test_logs.log 2024-12-01
   ```

2. **Check output**
   - Extracted logs will be saved in `output/output_YYYY-MM-DD.txt`.

3. **Troubleshooting**
   - Ensure the log file exists at the specified path.
   - Ensure correct permissions for reading/writing files.

