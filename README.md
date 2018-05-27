i don't think this is the right way to do this, but I was having trouble figuring out how to target the specific values it was returning.  It kept failing the tests because it was trying to compare an object to an expected value.  The best workaround I could find was to create a second list within each test function containing the expected output and comparing it to the input list.

filter method works, need to write more tests
