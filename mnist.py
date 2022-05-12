import torch
import torchvision
import torchvision.transforms as transforms
import torch.optim as optim
from sklearn.decomposition import PCA
from sklearn.manifold import MDS
from sklearn.manifold import TSNE
import numpy as np
import argparse

parser = argparse.ArgumentParser(description='dimensionality reduction with fashion mnist')
parser.add_argument('--method', default='pca', help='pca/mds/tsne')

def PCA_(test_data):

	#apply PCA to the testing data
	pca = PCA(n_components=2)
	pca.fit(test_data)
	test_data = pca.transform(test_data)

	return test_data

def MDS_(test_data):

	mds = MDS(n_components=2)
	test_data = mds.fit_transform(test_data)

	return test_data

def TSNE_(test_data):

	tsne = TSNE(n_components=2)
	test_data = tsne.fit_transform(test_data)

	return test_data

def main():

	args = parser.parse_args()

	#get testing data
	test_data_ = torchvision.datasets.FashionMNIST(root='./fashion_mnist_data', train=False, download=True, transform=transforms.ToTensor())

	#flatten the testing data
	test_data = test_data_.data.numpy()
	test_data = test_data.astype(float)/255.0
	test_data = test_data.reshape(test_data.shape[0], 784)

	#get testing labels
	test_label = test_data_.targets.numpy()

	#apply dimensionality reduction
	if args.method == 'pca':
		test_data = PCA_(test_data)
	elif args.method == 'mds':
		test_data = MDS_(test_data)
	elif args.method == 'tsne':
		test_data = TSNE_(test_data)

	print(test_data)

if __name__ == "__main__":
	main()