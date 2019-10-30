/*
 * Copyright (c) 2018 Razeware LLC
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * Notwithstanding the foregoing, you may not use, copy, modify, merge, publish, 
 * distribute, sublicense, create a derivative work, and/or sell copies of the 
 * Software in any work that is designed, intended, or marketed for pedagogical or 
 * instructional purposes related to programming, coding, application development, 
 * or information technology.  Permission for such use, copying, modification,
 * merger, publication, distribution, sublicensing, creation of derivative works, 
 * or sale is expressly withheld.
 *    
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

using System.Collections.Generic;
using UnityEngine;

public class Knight : Piece {
    public override List<Vector2Int> MoveLocations (Vector2Int gridPoint) {
        List<Vector2Int> locations = new List<Vector2Int> ();

        Vector2Int forwardForwardRight = new Vector2Int (gridPoint.x + 1, gridPoint.y + 2);
        if (GameManager.instance.PieceAtGrid (forwardForwardRight) == false) {
            locations.Add (forwardForwardRight);
        } else {
            locations.Add (forwardForwardRight);
        }

        Vector2Int forwardForwardLeft = new Vector2Int (gridPoint.x - 1, gridPoint.y + 2);
        if (GameManager.instance.PieceAtGrid (forwardForwardLeft) == false) {
            locations.Add (forwardForwardLeft);
        } else {
            locations.Add (forwardForwardLeft);
        }

        Vector2Int backBackRight = new Vector2Int (gridPoint.x + 1, gridPoint.y - 2);
        if (GameManager.instance.PieceAtGrid (backBackRight) == false) {
            locations.Add (backBackRight);
        } else {
            locations.Add (backBackRight);
        }

        Vector2Int backBackLeft = new Vector2Int (gridPoint.x - 1, gridPoint.y - 2);
        if (GameManager.instance.PieceAtGrid (backBackLeft) == false) {
            locations.Add (backBackLeft);
        } else {
            locations.Add (backBackLeft);
        }

        Vector2Int leftLeftForward = new Vector2Int (gridPoint.x - 2, gridPoint.y + 1);
        if (GameManager.instance.PieceAtGrid (leftLeftForward) == false) {
            locations.Add (leftLeftForward);
        } else {
            locations.Add (leftLeftForward);
        }

        Vector2Int leftLeftBack = new Vector2Int (gridPoint.x - 2, gridPoint.y - 1);
        if (GameManager.instance.PieceAtGrid (leftLeftBack) == false) {
            locations.Add (leftLeftBack);
        } else {
            locations.Add (leftLeftBack);
        }

        Vector2Int rightRightForward = new Vector2Int (gridPoint.x + 2, gridPoint.y + 1);
        if (GameManager.instance.PieceAtGrid (rightRightForward) == false) {
            locations.Add (rightRightForward);
        } else {
            locations.Add (rightRightForward);
        }

        Vector2Int rightRightBack = new Vector2Int (gridPoint.x + 2, gridPoint.y - 1);
        if (GameManager.instance.PieceAtGrid (rightRightBack) == false) {
            locations.Add (rightRightBack);
        } else {
            locations.Add (rightRightBack);
        }

        return locations;
    }
}