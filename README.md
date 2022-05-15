#VD2: Dimensionality Reduction

In this visualization exercise, three different dimensionality reduction methods (PCA, MDS and t-SNE) are applied on the 10,000 test set of Fashion MNIST dataset by projecting the high-dimensional data points onto a 2D plane. Each color represents a different class, and when users hover one dot in one visualization, the equivalent dots in the other visualizations will be highlighted with a change in radius and stroke width. The label of the specific data entry will be also indicated when a dot is being highlighted.

Test: Test

Test: Test

##Findings

From the three visualizations, we can see that each dimensionality reduction method maps each data entry differently on the plane. In addition, each method results in varying domains for the two extracted features, which have been scaled accordingly on this page for the convenience of the viewers. For the Fashion MNIST dataset, t-SNE may be the best selection as we can see that entries from the same class are clustered in small groups with decent margin from other classes. On the other hand, MDS may not be the ideal choice of method for this dataset as it has a time complexity of O(N^3) and does not work well with large datasets.

##Difficulties

Compare to the first D3 exercise, this visualization was a lot easier to achieve due to overcoming the initial steep learning curve. The only main difficulty was to figure out how to display the text of the corresponding label when a dot is highlighted, as I was not aware that elements without positions (x, y) specified are displayed behind the SVG by default.

##How to run the code

###Data Pre-processing

* First, pre-process the data by running `mnist.py` with the command `python mnist.py --method [pca/mds/tsne]`. This will generate a csv file of the dataset with reduced dimensionality for your selected method. Place all 3 csv files in the "staticdata" folder.

* Then, navigate into "nodejs-started-code" folder and run `npm start` locally on your computer. It should start a local web serve at http://localhost:8000/ .

* Note: You will need to install NodeJS, pytorch & sklearn in order to run this code.

##External Resources

[D3 Mouse Events](http://bl.ocks.org/WilliamQLiu/76ae20060e19bf42d774)