/* 
Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

function reverseLink(head){
    let prev = null
    let current = head
    let next = null

    while (current){
        next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}